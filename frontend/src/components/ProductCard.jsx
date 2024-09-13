import PropTypes from "prop-types";
import "./ProductCard.css";
const ProductCard = ({ name, price, image }) => {
  return (
    <div className="card">
      <img src={image} />
      <div className="card-desc">
        <h4>Name:{name}</h4>
        <h4>price:{price}</h4>
      </div>
      <button className="cart-btn">Add to Cart</button>
    </div>
  );
};
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
