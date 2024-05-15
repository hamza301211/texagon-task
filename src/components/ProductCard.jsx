/* eslint-disable react/prop-types */
import "../styles/product-card.css"
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  name,
  description,
  price,
  image,
  id
}) => {
  const navigate = useNavigate();
  return (
    <div className="product-card">
      <img src={`${image}`} alt={name} />
      <p>{name}</p>
      <p>{description}</p>
      <span>₹{price}</span>

      <div>
        <button onClick={()=>navigate(`/${id}`)}>
          Detail
        </button>
      </div>
    </div>
  );
};

export default ProductCard;