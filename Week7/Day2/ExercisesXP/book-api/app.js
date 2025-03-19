require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/books");

const app = express();
app.use(bodyParser.json());
// app.use(express.json());

app.use("/api/books", bookRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
  });

const PORT =  5000;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});