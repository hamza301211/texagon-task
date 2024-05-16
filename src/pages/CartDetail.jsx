import { useEffect, useState } from "react"
import productInstance from "../axios/productsInstance"
import { Link, useParams } from "react-router-dom"
import CartItem from "../components/CartItem"
import "../styles/cart-item.css"



const CartDetail = () => {
    const [product,setProduct] = useState({})
    const {id} = useParams();

    useEffect(()=>{
        getSingleProduct()
    },[])

    const getSingleProduct = async() =>{
        const product = await productInstance.get(`/${id}`)
        setProduct(product.data);
    }
  return (
    <div className='cart'>
    <main>
        <CartItem key={product.id} cartItem={product}/>
    </main>
    <aside>
      <p>Subtotal: </p>
      <p>Shipping Charges: </p>
      <p>Tax:</p>
      <p>
        Discount : <em>
            - 
        </em>
      </p>
      <p>
        <b>Total:</b>
      </p>
      {product?.length > 0 && <Link to={"/"}>Checkout</Link>}
    </aside>
  </div>
  )
}

export default CartDetail