/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/cart-item.css"

const CartItem = ({cartItem}) => {
    const {thumbnail,title,id,price,quantity} = cartItem;
  return (
    <div className="cart-item">
        <img src={thumbnail} alt={title}/>
        <article>
            <Link to={`/product/${id}`}>{title}</Link>
            <span>{price} $</span>
        </article>
        <div>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>
        <button><FaTrash/></button>
    </div>
  )
}

export default CartItem