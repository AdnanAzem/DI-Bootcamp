const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock database (replace with a real DB in production)
const users = [];

// Register
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    if (users.some(u => u.username === username)) {
        return res.status(400).send('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });

    // Generate JWT
    const accessToken = jwt.sign({ username }, 'access_secret', { expiresIn: '1h' });
    const refreshToken = jwt.sign({ username }, 'refresh_secret', { expiresIn: '7d' });

    // Set tokens in HTTP-only cookies
    res.cookie('accessToken', accessToken, { httpOnly: true, maxAge: 3600000 }); // 1 hour
    res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 604800000 }); // 7 days

    res.json({ message: 'User registered successfully' });
});

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    // Check if user exists
    if (!user) {
        return res.status(404).send('User not found');
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).send('Invalid password');
    }

    // Generate JWT
    const accessToken = jwt.sign({ username }, 'access_secret', { expiresIn: '1h' });
    const refreshToken = jwt.sign({ username }, 'refresh_secret', { expiresIn: '7d' });

    // Set tokens in HTTP-only cookies
    res.cookie('accessToken', accessToken, { httpOnly: true, maxAge: 3600000 }); // 1 hour
    res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 604800000 }); // 7 days

    res.json({ message: 'Logged in successfully' });
});

// Refresh Token
router.post('/refresh', (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).send('No refresh token provided');
    }

    try {
        const decoded = jwt.verify(refreshToken, 'refresh_secret');
        const newAccessToken = jwt.sign({ username: decoded.username }, 'access_secret', { expiresIn: '1h' });
        
        // Set new access token
        res.cookie('accessToken', newAccessToken, { httpOnly: true, maxAge: 3600000 });
        res.json({ message: 'Token refreshed' });
    } catch (err) {
        res.status(403).send('Invalid refresh token');
    }
});

// Logout
router.post('/logout', (req, res) => {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.send('Logged out successfully');
});

module.exports = router;