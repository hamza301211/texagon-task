import ProductCard from "../components/ProductCard"


const Home = () => {
  return (
    <div>
    <h1>Products</h1>
    <ProductCard 
      name="Macbook"
      price={1200}
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIR2vKCO7l-rGpFPg-NoCJjgz57Gwg-l9E5IPEAT3KEg&s"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan purus sed dignissim pulvinar. Aliquam et commodo elit. Vivamus finibus lectus at mollis tempor."
    />
    </div>
  )
}

export default Home