const express = require("express");
const products = express.Router();
const {
    checkName,
    validateImage,
  } = require('../validations/checkProduct');
const {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct
} = require("../queries/products");



// INDEX
products.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  if (allProducts[0]) {
    res.status(200).json(allProducts);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
products.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await getProduct(id);
  console.log("product", product);
  if (!product.message) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
products.post("/", checkName, async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE

products.delete("/:id", async (req, res) => {
  try{ 
  const { id } = req.params;
  const deletedProduct = await deleteProduct(id);
  res.status(200).json(deletedProduct)
  }catch(error){
    res.status(404).json({error: 'id not found'})
  }
});

// UPDATE

products.put("/:id", checkName, validateImage, async (req, res) => {
  try{
    const { id } = req.params;
    const updatedProduct = await updateProduct(id, req.body);
    res.status(200).json(updatedProduct);
    }catch(error){
      res.status(404).json({error: 'bookmark not found'})
    }
});



module.exports = products;