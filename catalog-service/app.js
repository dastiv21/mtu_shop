const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const config = require('./config');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');

// Replace 'mongodb://localhost:27017/shop' with your MongoDB connection string
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', orderRoutes);

app.use('/', productRoutes);

const PORT = config.port || 3002;
app.listen(PORT, () => {
    console.log(`Catalogue service now running on port ${PORT}`);
});
