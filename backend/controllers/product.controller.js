import mongoose from "mongoose";
import Product from "../models/product.model.js";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // passing an empty object will fetch all
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
    console.log("error fetching products", error.message);
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all fields" });
  }
  const newProduct = new Product(product); //instance(represents a document in the mongodb collection)
  //creating an instance doesn't actually store it to db so we have to save it using save()
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in create product:", error.message);
    res.status(500).json({ sucess: false, message: "server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ success: true, message: "product not found" });
    }
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: true, message: "server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params; //destructure the id field from the url
  console.log("id:", id);
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "product deleted" });
  } catch (error) {
    res.status(404).json({ success: false, message: "product not found" });
  }
};
