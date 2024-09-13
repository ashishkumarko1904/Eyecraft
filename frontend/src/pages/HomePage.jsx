import { useProductStore } from "../store/productStore";
import ProductCard from "../components/ProductCard.jsx";
import { useEffect, useState } from "react";
import "./HomePage.css";
const HomePage = () => {
  const [product, setProduct] = useState([]);
  const { fetchProducts } = useProductStore();
  useEffect(() => {
    const fetchdata = async () => {
      const { success, message, data } = await fetchProducts();
      console.log(success);
      console.log(message);
      console.log(data);
      setProduct(data);
    };
    fetchdata();
  });

  return (
    <div className="top-container-product">
      <div className="grid-product">
        <div className="inner-poduct-grid">
          {product.length ? (
            product.map((prod) => (
              <ProductCard
                key={prod._id}
                name={prod.name}
                price={prod.price}
                image={prod.image}
              />
            ))
          ) : (
            <div className="centered-div">
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
