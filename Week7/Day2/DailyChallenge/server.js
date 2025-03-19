const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
require("dotenv").config();

app.use(express.json());
app.use("/api", userRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
