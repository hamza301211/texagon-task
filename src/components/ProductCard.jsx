/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa";
import "../styles/product-card.css"

const ProductCard = ({
  name,
  description,
  price,
  image,

}) => {
  return (
    <div className="product-card">
      <img src={`${image}`} alt={name} />
      <p>{name}</p>
      <p>{description}</p>
      <span>₹{price}</span>

      <div>
        <button>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;