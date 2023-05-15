const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require('./config');
const axios = require("axios"); // Add this import
const app = express();

app.use(morgan("combined"));
app.use(morgan("dev", {}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

let cart = [];

const catalogServiceUrl = config.CATALOGUE_SERVICE_URL; // Replace with your catalogue service URL
const userServiceUrl = config.USER_SERVICE_URL; // Replace with your catalogue service URL

app.post("/add", async (req, res) => {
    const {productID, quantity} = req.body;

    try {
        // Fetch product data from catalogue service
        const response = await axios.get(`${catalogServiceUrl}/getProduct/${productID}`);
        const resp_data = response.data;

        // Check if requested quantity is available

        if(resp_data.responseCode !== 100){
            return res.status(400).json({responseCode: 103, error: "Couldn't fetch product"});
        }
        const product = resp_data.data
        if (product.quantity < quantity) {
            return res.status(400).json({responseCode: 103, error: "Requested quantity is not available"});
        }

        let is_exist = false;

        for (let ind = 0; ind < cart.length; ind++) {
            if (cart[ind].productID === productID) {
                const new_qty = parseInt(cart[ind].quantity) + parseInt(quantity);
                cart[ind].quantity = new_qty;
                is_exist = true;
                break;
            }
        }

        if (!is_exist) {
            let max = 0;

            for (let ind = 0; ind < cart.length; ind++) {
                if (max < cart[ind].cartid) {
                    max = cart[ind].cartid;
                }
            }

            const cartid = max + 1;
            const data = {
                cartid: cartid,
                productID: productID,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity,
            };

            cart.push(data);
        }

        res.status(201).send({responseCode: 100, data: cart});
    } catch (error) {
        console.error(error);
        res.status(500).json({respnseCode: 103, error: "An error occurred while processing the request"});
    }
});


app.delete("/cart/items/:id", (req, res) => {
    const pid = req.params.id;

    for (let ind = 0; ind < cart.length; ind++) {
        if (cart[ind].productID === pid) {
            cart.splice(ind, 1);
            break;
        }
    }

    res.status(201).send({responseCode: 100, data: cart});
});

app.get("/get", (req, res) => {
    res.status(200).json({responseCode: 100, data: cart});
});

app.post("/checkout", async (req, res) => {
    if (cart.length === 0){
        res.status(500).json({responseCode:103, message: 'Your cart is empty' });
    }
    try {
        const username = req.body.username;
        const salesDate = new Date();

        // Fetch user and customer data from User Service
        const response = await axios.get(`${userServiceUrl}/getUser/${username}`);
        if(response.data.responseCode !== 100){
            res.status(500).json({responseCode:103, message: 'user cannot be fetched' });
        }
        const  user = response.data.data;


        // Map cart items to orders
        const orders = cart.map(item => ({
            userID: user.id,
            customerName: user.customer.name,
            customerAddress: user.customer.address,
            salesDate,
            productID: item.productID,
            quantity: item.quantity,
            price: item.price,
            status: 'pending',
        }));


        // Create orders in the Catalogue service
        const createOrdersResponse = await axios.post(`${catalogServiceUrl}/createOrders`, { orders });

        if (createOrdersResponse.data.responseCode === 100) {
            // Clear the cart only if the createOrders request is successful
            cart = [];
        } else {
            // Handle errors returned from createOrders request
            res.status(500).json({ responseCode: 103, message: 'Failed to create orders' });
            return;
        }

        res.status(201).json(createOrdersResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({responseCode:103, message: 'Internal server error' });
    }
});

const PORT = config.port || 3003;

app.listen(PORT, () => {
    console.log(`Cart service now running on port ${PORT}`);
});
