const express = require('express');
const app = express();

app.use(express.json());

const todosRouter = require('./routes/todos');

app.use('/todos', todosRouter);



app.listen(3000, () => {
    console.log('Server listening on port 3000');
});