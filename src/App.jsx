import {Routes, Route } from "react-router-dom";
import About from "./components/About";
import Cart from "./pages/Cart";
import Body from "./pages/Body";
import Plants from "./pages/Plants";
import Care from "./pages/Care";
import Accessories from "./pages/Accessories";
import Seeds from "./pages/Seeds";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/plant-collection' element={<Plants />} />
          <Route path='/seed-collection' element={<Seeds />} />
          <Route path='/accessory-collection' element={<Accessories />} />
          <Route path='/plant-care-collection' element={<Care />} />
          <Route path='/product/:productID' element={<Product />}/>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
    </div>
  )
}
//error page set kr


export default App