const db = require("../db/dbConfig");

const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    return allProducts;
  } catch (error) {
    return error;
  }
};

const getProduct = async (id) => {
  try {
    const oneProduct = await db.one("SELECT * FROM products WHERE id=$1", id);
    return oneProduct;
  } catch (error) {
    return error;
  }
};

// CREATE
const createProduct = async (product) => {
  try {
    const newProduct= await db.one(
      "INSERT INTO products (name, description, price, top_speed, image) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [product.name, product.description, product.price, product.top_speed, product.image]
    );
    return newProduct;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteProduct= async(id)=>{
  try{
    const deletedProduct= await db.one('DELETE FROM products WHERE id=$1 RETURNING *', id)
    return deletedProduct

  } catch(error){
    return error
  }
}

// UPDATE

const updateProduct= async (id, product) => {
  try{
    const updatedProduct = await db.one(
    "UPDATE products SET name=$1, description=$2, price=$3, top_speed=$4, image=$5 where id=$6 RETURNING *",
    [product.name, product.description, product.price, product.top_speed, product.image, id]
  );
  return updatedProduct;

  } catch(error){
    return error
  }
}

module.exports = { getAllProducts, getProduct, createProduct, deleteProduct, updateProduct};
