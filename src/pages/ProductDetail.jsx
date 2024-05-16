import { useEffect, useState } from "react"
import productInstance from "../axios/productsInstance"
import { Link, useParams } from "react-router-dom"
import "../styles/product-detail.css"
import Loader from "../components/Loader";

const ProductDetail = () => {
    const [product,setProduct] = useState({})
    const [loading,setLoading] = useState()
    const {id} = useParams();

    useEffect(()=>{
        getSingleProduct()
    },[])

    const getSingleProduct = async() =>{
        setLoading(true)
        const product = await productInstance.get(`/${id}`)
        setProduct(product.data);
        setLoading(false);
    }
  return (
   <>
    {
        loading ? <Loader/>:
        <div className="product-detail">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>Price: ₹{product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Description: {product.description}</p>
        <Link className="btn">Add To Cart</Link>
      </div>
    </div>
    }
   </>
  );
};

export default ProductDetail;
