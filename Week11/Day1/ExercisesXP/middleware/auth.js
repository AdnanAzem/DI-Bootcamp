const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Get token from cookies or Authorization header
    const token = req.cookies.accessToken || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        const decoded = jwt.verify(token, 'access_secret');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).send('Invalid token');
    }
};