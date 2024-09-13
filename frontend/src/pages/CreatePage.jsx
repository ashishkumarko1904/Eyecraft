import { useState } from "react";
import "./CreatePage.css";
import { useProductStore } from "../store/productStore";
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log(success);
    alert(message);
  };
  return (
    <div className="box">
      <div className="form-container">
        <h2>CREATE A PRODUCT</h2>
        <div className="input-container">
          <label>Product Name:</label>
          <input
            className="input-box"
            name="name"
            placeholder="product name here.."
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label>Price:</label>
          <input
            className="input-box"
            name="price"
            placeholder="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label>Image URL:</label>
          <input
            className="input-box"
            name="image"
            placeholder="Image_URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
        </div>
        <div className="form-btn-container">
          <button className="form-btn" onClick={handleAddProduct}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
