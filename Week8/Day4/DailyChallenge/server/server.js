const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// GET route to send a message
app.get('/api/hello', (req, res) => {
    res.send('Hello From Express');
});

// POST route to handle form submission
app.post('/api/world', (req, res) => {
    const receivedData = req.body.text;
    console.log('Received POST request with data:', receivedData);

    res.send(`I received your POST request. This is what you sent me: ${receivedData}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});