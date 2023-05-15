const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/getOrders', orderController.getOrders);
router.post('/createOrders', orderController.createOrders);

module.exports = router;
