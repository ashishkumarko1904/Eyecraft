import mongoose from "mongoose";
//schema definition
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //will associate createdat and updated
  }
);
//model creation
const Product = mongoose.model(`Product`, productSchema); // accept two fields a string and an object or schema
export default Product;
