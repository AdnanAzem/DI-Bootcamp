const express = require('express');
const bodyParser = require('body-parser');
const taskRouter = require('./routes/task');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/tasks', taskRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});