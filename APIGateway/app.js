const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const config = require('./config');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const cartServiceUrl = config.CART_SERVICE_URL;
const catalogServiceUrl = config.CATALOGUE_SERVICE_URL;
const userServiceUrl = config.USER_SERVICE_URL;

function errorResponse(error, res){
    try{
        return res.status(500).send(error.response.data );
    }catch{
        console.log(error);
        return res.status((500)).send({responseCode:103, errors: 'An error occurred while processing your request' })
    }
}

app.post('/api/cart/add', async (req, res) => {
    try {
        const response = await axios.post(`${cartServiceUrl}/add`, req.body);
        res.status(response.status).send(response.data);
    } catch (error) {
        return errorResponse(error, res);
    }
});

app.delete('/api/cart/items/:id', async (req, res) => {
    try {
        const response = await axios.delete(`${cartServiceUrl}/cart/items/${req.params.id}`);
        res.status(response.status).send(response.data);
    } catch (error) {
        return errorResponse(error, res);
    }
});

app.get('/api/cart', async (req, res) => {
    try {
        const response = await axios.get(`${cartServiceUrl}/get`);
        res.status(response.status).send(response.data);
    } catch (error) {
        return errorResponse(error, res);
    }
});
app.post('/api/cart/checkout', async (req, res) => {
    try {
        const response = await axios.post(`${cartServiceUrl}/checkout`, req.body);
        res.status(response.status).send(response.data);
    } catch (error) {
        return errorResponse(error, res);
    }
});

app.post('/api/catalog/newProduct', async (req, res) => {
    try {
        const response = await axios.post(`${catalogServiceUrl}/newProduct`, req.body);
        res.status(response.status).send(response.data);
    } catch (error) {
        return errorResponse(error, res);
    }
});

app.delete('/api/catalog/deleteProduct/:id', async (req, res) => {
    try {
        const response = await axios.delete(`${catalogServiceUrl}/deleteProduct/${req.params.id}`, req.body);
        res.status(response.status).send(response.data);
    } catch (error) {
        return errorResponse(error, res);
    }
});

app.get('/api/catalog/getProducts', async (req, res) => {
    try {
        const response = await axios.get(`${catalogServiceUrl}/getProducts`);
        res.status(response.status).send(response.data);
    } catch (error) {
        return errorResponse(error, res);
    }
});
app.get('/api/catalog/getProduct/:id', async (req, res) => {
    try {
        const response = await axios.get(`${catalogServiceUrl}/getProduct/${req.params.id}`);
        res.status(response.status).send(response.data);
    } catch (error) {
        return errorResponse(error, res);
    }
});

app.get('/api/catalog/getOrders', async (req, res) => {
    try {
        const response = await axios.get(`${catalogServiceUrl}/getOrders`);
        res.status(response.status).send(response.data);
    } catch (error) {
        return errorResponse(error, res);
    }
});

// USER service

app.post('/api/users/login', async (req, res) => {
    try {
        const response = await axios.post(`${userServiceUrl}/login`, req
            .body);
        res.status(response.status).send(response.data);
    } catch (error) {
        return errorResponse(error, res);
    }
});
app.get('/api/users/getUser/:username', async (req, res) => {
    try {
        const response = await axios.get(`${userServiceUrl}/getUser/${req.params.username}`);
        res.status(response.status).send(response.data);
    } catch (error) {
        return errorResponse(error, res);
    }
});

app.post('/api/users/register', async (req, res) => {
    try {
        const response = await axios.post(`${userServiceUrl}/register`, req.body);
        res.status(response.status).send(response.data);
    } catch (error) {
        return errorResponse(error, res);
    }
});

// Define the port the API Gateway will listen on
const PORT = config.port || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`API Gateway service is now running on port ${PORT}`);
});
