import ProductCard from "../components/ProductCard"
import productInstance from "../axios/productsInstance"
import { useEffect, useState } from "react"
import "../styles/home.css"




const Home = () => {
  const [products,setProducts] = useState([]);

  useEffect(()=>{
      getProducts();
  },[])

  const getProducts = async () =>{
    try {
        const res = await productInstance.get()
        const productsData = res.data.products;
        setProducts(productsData);
        console.log(products)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="product-container">
    <h1>Products</h1>
    <div className="product-grid">
    {products.map((data) => (
        <ProductCard
          key={data.id}
          name={data.title}
          price={data.price}
          image={data.thumbnail}
          description={data.description}
        />
      ))}
      </div>
    </div>
  )
}

export default Home