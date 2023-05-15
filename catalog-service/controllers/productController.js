const ProductModel = require('../models/productModel');

function validateProduct(product) {
    const requiredFields = ['name', 'price', 'image'];
    const errors = [];

    requiredFields.forEach((field) => {
        if (!product[field]) {
            errors.push(`${field} is required`);
        }
    });

    // Additional validation for price
    if (product.price && isNaN(parseFloat(product.price))) {
        errors.push('Price must be a number');
    }

    return errors;
}

async function newProduct(req, res) {
    const product = req.body;
    const validationErrors = validateProduct(product);

    if (validationErrors.length > 0) {
        return res.status(400).json({ responseCode: 103, errors: validationErrors });
    }

    const existingProduct = await ProductModel.findOne({ name: product.name });

    if (existingProduct) {
        res.status(400).json({ responseCode: 103, errors: 'Product already exists' });
    } else {
        const newProduct = new ProductModel(product);
        const result = await newProduct.save();
        res.status(201).json({ responseCode: 100, data: result });
    }
}

async function deleteProduct(req, res) {
    const productId = req.params.id;
    await ProductModel.deleteOne({ _id: productId });
    res.status(200).json({ responseCode: 100, data: { status: 'Product removed successfully' } });
}

async function getProducts(req, res) {
    const productList = await ProductModel.find();
    res.status(200).json({ responseCode: 100, data: productList });
}

async function getProduct(req, res) {
    const productId = req.params.id;

    const product = await ProductModel.findById(productId);
    res.status(200).json({ responseCode: 100, data: product });
}

module.exports = {
    newProduct,
    deleteProduct,
    getProducts,
    getProduct,
};
