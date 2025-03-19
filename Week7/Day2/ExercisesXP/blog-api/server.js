const express = require('express');
const bodyParser = require("body-parser");
require("dotenv").config();
const postsRouter = require('./routes/posts');


const app = express();

app.use(bodyParser.json());
app.use('/posts', postsRouter);

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
  });

const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});