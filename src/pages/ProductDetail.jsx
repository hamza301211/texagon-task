import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/product-detail.css";
import Loader from "../components/Loader";
import productInstance from "../axios/productsInstance";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    try {
      setLoading(true);
      const response = await productInstance.get(`/${id}`);
      setProduct(response.data);
      setLoading(false);
      console.log(product)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="product-detail">
          <div className="product-images">
            {product.images.length > 0 && (
              <img
                className="main-image"
                src={product.images[0]}
                alt={product.title}
              />
            )}

            {product.images.slice(1, 3).map((image, index) => (
              <img key={index} className="small-image" src={image} alt={product.title} />
            ))}
          </div>
          <div className="product-info">
            <h2>{product.title}</h2>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
            <p>Stock: {product.stock}</p>
            <p>Description: {product.description}</p>
            <p>Discount : {product.discountPercentage}%</p>
            <p>Price: ₹{product.price}</p>
            <Link className="btn">Add To Cart</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
