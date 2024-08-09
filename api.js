const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const mongoURI = 'mongodb+srv://admibot:admibot2022@cluster0.zbsflhe.mongodb.net/gorillaattacker'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Check MongoDB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Health Check Endpoint
app.get('/', (req, res) => {
    res.send('API is up and running');
});

// Signup Endpoint (POST request)
app.post('/api/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log('Received signup request:', username, email); // Log received data
        const newUser = new User({ username, email, password });
        const savedUser = await newUser.save();
        console.log('User saved successfully:', savedUser); // Log saved user
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error); // Log any errors
        res.status(500).json({ error: 'Error registering user', details: error.message });
    }
});

// Get All Users (GET request)
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            res.status(200).json({ message: 'No users found' });
        } else {
            res.status(200).json(users);
        }
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Error fetching users', details: error.message });
    }
});

// Update User (PUT request)
app.put('/api/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { email, password } = req.body;

        const updateData = { email };
        if (password) {
            updateData.password = password; // Store password in plain text (not recommended)
        }

        const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ success: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Error updating user', details: error.message });
    }
});

// Login Endpoint (POST request)
app.post('/api/login', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await User.findOne({ $or: [{ username }, { email }] });

        if (!user || user.password !== password) {
            res.status(401).json({ error: 'The account you entered is invalid or disabled' });
        } else {
            res.status(200).json({ message: 'Login successful', user });
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Error logging in user', details: error.message });
    }
});

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
