// IMPORTS
const cors = require("cors");
const express = require("express");
const productsController = require("./controllers/productController.js");
// const router = express.Router();
// const serverless = require("serverless-http");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
// products ROUTES
app.use("/products", productsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to ELECTRIC App!");
});


// Error
app.get('*', (req, res) => {
  res.status(404).send('Page does not exist');
});
// EXPORT
module.exports = app;
