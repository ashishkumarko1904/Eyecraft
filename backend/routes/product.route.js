import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();
//express.Router() is a function provided by Express.js that allows you to create modular, mountable route handlers.
// It is essentially a mini Express application that only contains routes and middleware.

router.get("/", (req, res) => {
  console.log("server ready");
  res.send("running");
});
router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
export default router;
