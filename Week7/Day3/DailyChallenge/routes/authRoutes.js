const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register a new user
router.post('/register', authController.registerUser);

// Login a user
router.post('/login', authController.loginUser);

// Get all users (for demonstration purposes)
router.get('/users', authController.getAllUsers);

// Get a specific user by ID (for demonstration purposes)
router.get('/users/:id', authController.getUserById);

// Update a user by ID (for demonstration purposes)
router.put('/users/:id', authController.updateUser);

module.exports = router;