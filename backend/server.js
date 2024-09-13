//setting up server to listen on  a port
//and other things
import express from "express";
import { connectToDb } from "./config/db.js";
import path from "path";

import productRoutes from "./routes/product.route.js";
//The routes you define using express.Router() are all attached to the router object.
// and we import the object to variable like(productRoutes):)
const PORT = process.env.PORT || 5000;

const app = express();
const __dirname = path.resolve();
app.use(express.json()); //middleware for handling json
//use case is When your API expects the client to send data in JSON format

app.use("/api/products", productRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectToDb();
  console.log("listening on port 5000");
});
