import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { lazy,Suspense } from 'react'
import Loader from './components/Loader'
import Header from './components/Header'


const Home = lazy(()=> import("./pages/Home"))
const ProductDetail = lazy(()=> import("./pages/ProductDetail"))
const CartDetail = lazy(()=> import("./pages/CartDetail"))

function App() {
  return (
   <Router>
   <Header/>
   <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<ProductDetail/>}/>
      <Route path='/cart' element={<CartDetail/>}/>
    </Routes>
    </Suspense>
   </Router>
  )
}

export default App
