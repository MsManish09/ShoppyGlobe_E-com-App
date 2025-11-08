import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header"
import Homebody from "./components/HomeBody"


// import axiox
import axios from "axios";

// import react routes
import { Routes, Route } from "react-router-dom";
import SearchProduct from "./components/SearchProduct";
import { useEffect, useState } from "react";
import ProductDetails from "./components/ProductDetails";
import ProductByCategory from "./components/ProductByCategory";
import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/products/productsSlice";


function App(){

  // dispatch aciton to fetch api data in redux store
  const dispatch = useDispatch()

  // get data from redux store
  const { items,categories, status, error } = useSelector((state) => state.products)

  // fetch data in redux once th component mounts
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts()); // fetch
    }
  }, [status, dispatch]); 

  
  const [cart, setCart] = useState([])

  // if (status === 'loading') return <p>Loading...</p>
  // if (status === 'failed') return <p>Error: {error}</p>

  return(
    <div className=" flex flex-col justify-center items-center max-w-screen " >
      <Header classname=' sticky top-0 ' />


      {/*   // handle loading and api fetch failur */}
      { status === 'loading' && <p>Loading...</p>}
      { status === 'failed' && <p>Error: {error}</p>}

      <Routes>
        <Route path='/' element= {<Homebody  />} />
        <Route path='*' element= {<ErrorPage  />} />
        <Route path='/product/:name' element={ <SearchProduct  cart={cart} setCart={setCart} /> } />
        <Route path='/product_details/:id' element= {<ProductDetails cart={cart} setCart={setCart}/>} />
        <Route path='/category/:category' element= { <ProductByCategory  cart={cart} setCart={setCart} /> } />

        <Route path='/cart' element={ <Cart  cart={cart} setCart={setCart} /> } />
      </Routes>
      
    </div>
  )
}

export default App