const Order = require('../models/orderModel');

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('productID');
        res.status(200).json({ responseCode: 100, data: orders });
    } catch (err) {
        res.status(500).json({ responseCode: 103, errors: err.message });
    }
};
function validateOrders(orders) {
    const requiredFields = ['userID', 'customerName', 'salesDate', 'productID', 'quantity', 'price', 'status'];
    const errors = [];

    orders.forEach((order, index) => {
        requiredFields.forEach((field) => {
            if (!order[field]) {
                errors.push(`Order ${index}: ${field} is required`);
            }
        });

        // Additional validation for quantity
        if (order.quantity && (isNaN(parseInt(order.quantity)) || order.quantity < 1)) {
            errors.push(`Order ${index}: Quantity must be a positive integer`);
        }
        // Additional validation for price
        if (order.quantity && (isNaN(parseInt(order.price)) || order.price < 0.1)) {
            errors.push(`Order ${index}: Price must be a positive integer`);
        }
    });

    return errors;
}


const createOrders = async (req, res) => {
    try {
        const orders = req.body.orders;
        const validationErrors = validateOrders(orders);

        if (validationErrors.length > 0) {
            return res.status(400).json({ responseCode: 103, errors: validationErrors });
        }

        const createdOrders = await Order.insertMany(orders);
        res.status(200).json({ responseCode: 100, data: createdOrders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ responseCode: 103, errors: error.message });
    }
};



module.exports = {
    getOrders,
    createOrders,
};
