import { useState } from "react";
import { useProductStore } from "../store/productStore";
import "./UpdateProduct.css";

const UpdateProductDetails = () => {
  const { UpdateProduct } = useProductStore();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    image: "",
  });
  const handleUpdate = async () => {
    const updatedProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    };
    const { success, message, data } = await UpdateProduct(
      product.id,
      updatedProduct
    );
    if (success) {
      alert("product updated successfully");
      setProduct({ id: "", name: "", price: "", image: "" });
    }
    console.clear();
    console.log(success);
    console.log(message);
    console.log(data);
  };
  return (
    <div className="update-form">
      <input
        className="update-input-field"
        name="id"
        placeholder="product_id"
        value={product.id}
        onChange={(e) => setProduct({ ...product, id: e.target.value })}
      />
      <input
        className="update-input-field"
        name="name"
        placeholder="product name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        className="update-input-field"
        name="price"
        placeholder="price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <input
        className="update-input-field"
        name="image"
        placeholder="image url"
        value={product.image}
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
      />
      <button className="update-btn" onClick={handleUpdate}>
        UpdateProduct
      </button>
    </div>
  );
};

export default UpdateProductDetails;
