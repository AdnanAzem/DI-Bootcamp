const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/auth', authRoutes);

// Protected route (requires JWT)
app.get('/protected', authMiddleware, (req, res) => {
    res.send(`Welcome, ${req.user.username}!`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});