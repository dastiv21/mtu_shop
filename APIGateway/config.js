// src/config.js
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT || 3004,
    CART_SERVICE_URL: process.env.CART_SERVICE_URL,
    CATALOGUE_SERVICE_URL: process.env.CATALOGUE_SERVICE_URL,
    USER_SERVICE_URL: process.env.USER_SERVICE_URL,
};
