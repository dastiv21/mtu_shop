// src/config.js
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT || 3004,
    mongoURI: process.env.MONGODB_URI,
};
