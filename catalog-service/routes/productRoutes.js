const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.post('/newProduct', productController.newProduct);
router.delete('/deleteProduct/:id', productController.deleteProduct);
router.get('/getProducts', productController.getProducts);
router.get('/getProduct/:id', productController.getProduct);

module.exports = router;