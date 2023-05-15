const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require("./config");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define the User and Customer schemas
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    is_admin: {
        type: Boolean,
        default: false
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    }
});

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Define the User and Customer models
const User = mongoose.model('User', userSchema);
const Customer = mongoose.model('Customer', customerSchema);


function validateLoginData(data) {
    const requiredFields = ['username', 'password'];
    const errors = [];

    requiredFields.forEach((field) => {
        if (!data[field]) {
            errors.push(`${field} is required`);
        }
    });

    return errors;
}

function validateRegistrationData(data) {
    const requiredFields = ['username', 'password', 'name', 'address'];
    const errors = [];

    requiredFields.forEach((field) => {
        if (!data[field]) {
            errors.push(`${field} is required`);
        }
    });

    return errors;
}

// Set up the routes
app.post('/login', (req, res) => {
    const validationErrors = validateLoginData(req.body);

    if (validationErrors.length > 0) {
        return res.status(400).json({ responseCode: 103, errors: validationErrors });
    }

    const { username, password } = req.body;

    User.findOne({ "username":username, "password":password })
        .then(user => {
            if (user) {
                const repobj = {
                    id: user._id,
                    username: user.username,
                    is_admin: user.is_admin
                };
                res.json({ responseCode: 100, data: repobj });
            } else {
                console.log(user);
                res.status(404).json({ responseCode: 103, errors: 'User not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ responseCode: 103, errors: 'Error logging user in' });
            throw err;
        });
});

app.post('/register', async (req, res) => {
    const validationErrors = validateRegistrationData(req.body);

    if (validationErrors.length > 0) {
        return res.status(400).json({ responseCode: 103, errors: validationErrors });
    }

    const { username, password, name, address } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            res.status(409).json({ responseCode: 103, errors: 'User already exists' });
        } else {
            const newCustomer = new Customer({ name, address });
            const savedCustomer = await newCustomer.save();

            const newUser = new User({ username, password, customer: savedCustomer._id });
            const savedUser = await newUser.save();

            res.json({ responseCode: 100, data: savedUser });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ responseCode: 103, errors: 'User cannot be registered at this time.' });
    }
});


app.get('/getUser/:username', async (req, res) => {
    const userId = req.params.username;

    try {
        const user = await User.findOne({username:userId}).populate('customer');

        if (!user) {
            return res.status(404).json({ responseCode: 103, errors: 'User not found' });
        }

        const userData = {
            id: user._id,
            username: user.username,
            is_admin: user.is_admin,
            customer: {
                id: user.customer._id,
                name: user.customer.name,
                address: user.customer.address
            }
        };

        res.status(200).json({ responseCode: 100, data: userData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ responseCode: 103, errors: 'Error fetching user data' });
    }
});


const PORT = config.port || 3003;

app.listen(PORT, () => {
    console.log(`User service now running on port ${PORT}`);
});
