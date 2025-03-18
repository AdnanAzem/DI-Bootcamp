const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome to the home page");
});

router.get('/about', (req, res) => {
    res.send("Welcome to the about page");
});

module.exports = router;