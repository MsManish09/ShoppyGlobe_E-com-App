import Header from "./components/Header"
import Homebody from "./components/HomeBody"


// import axiox
import axios from "axios";

// import react routes
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/products/productsSlice";

import { lazy, Suspense } from "react";

function App(){

  // lazy load components
  const Cart = lazy(() => import("./components/Cart"))
  const UserProfile = lazy(()=>import( "./components/userProfile"))
  const ProductDetails =  lazy(()=>import("./components/ProductDetails")) 
  const ErrorPage = lazy(()=>import("./components/ErrorPage"))
  const SearchProduct = lazy(()=>import( "./components/SearchProduct"));
  const ProductByCategory = lazy(()=>import("./components/ProductByCategory"));

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

  
  // if (status === 'loading') return <p>Loading...</p>
  // if (status === 'failed') return <p>Error: {error}</p>

  return(
    <div className=" flex flex-col justify-center items-center max-w-screen " >
      <Header classname=' sticky top-0 ' />


      {/*   // handle loading and api fetch failur */}
      { status === 'loading' && <p>Loading...</p>}
      { status === 'failed' && <p>Error: {error}</p>}

      <Suspense fallback={<div className="text-center mt-20 text-2xl font-bold text-blue-600 ">Loading...</div>}>
        <Routes>

          <Route path='/' element= {<Homebody  />} />
          <Route path='*' element= {<ErrorPage  />} />
          <Route path='/product/:name' element={ <SearchProduct   /> } />
          <Route path='/product_details/:id' element= {<ProductDetails />} />
          <Route path='/category/:category' element= { <ProductByCategory   /> } />

          <Route path='/cart' element={ <Cart /> } />
          <Route path='/user_info' element={ <UserProfile /> } />
        
        </Routes>
      </Suspense>
      
      
    </div>
  )
}

export default App