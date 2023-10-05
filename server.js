const express = require("express");
const errorHandler = require("./middleware/contactErrorHandler");
const connectdb = require("./config/dbConnection");

const app = express();
const dotnev = require("dotenv").config();
const port = process.env.PORT || 5000;

connectdb();

app.use(express.json());

app.use("/contact", require("./routers/contactRoutes"));
app.use("/users", require("./routers/userRoutes"));
app.use(errorHandler);

app.listen(port, (err) => {
  if (err) console.log("error in port");
  console.log(`server running on port ${port}`);
});
