import { useState } from "react";
import { useProductStore } from "../store/productStore";
import "./DeleteProduct.css";

const DeleteProduct = () => {
  const [product, setProduct] = useState({
    id: "",
  });
  const { deleteMyProduct } = useProductStore();
  const handleDelete = async () => {
    const { success, message } = await deleteMyProduct(product.id);
    if (success) {
      setProduct({ id: "" });
    }
    console.log(success);
    console.log(message);
  };
  return (
    <div className="delete-form">
      <input
        className="input-field"
        name="id"
        placeholder="product_id"
        value={product.id}
        onChange={(e) => setProduct({ ...product, id: e.target.value })}
      />
      <button className="btn" onClick={handleDelete}>
        delete product
      </button>
    </div>
  );
};

export default DeleteProduct;
