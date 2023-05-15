const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    customerName: {
        type: String,
    },
    customerAddress: {
        type: String,
    },
    salesDate: {
        type: Date,
        required: true,
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered'],
        required: true,
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
