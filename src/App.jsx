import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { lazy,Suspense } from 'react'
import Loader from './components/Loader'


const Home = lazy(()=> import("./pages/Home"))

function App() {
  return (
   <Router>
   <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </Suspense>
   </Router>
  )
}

export default App
