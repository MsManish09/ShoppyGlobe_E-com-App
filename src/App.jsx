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
import { clearCart, setCartDetailsFromDB } from "./redux/cart/cartSlice";

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

  // useEffect ot load cart items for db when ever user logs-In
  const { isLoggedIn, name } = useSelector(state => state.user)

  useEffect(()=>{
    async function fetchCartitems(){

      // is user is logged out -> empty cart
      if(!isLoggedIn){
        dispatch(clearCart())
        return
      }

      // when user is logged in
      try {

        const token = localStorage.getItem('token')

        const response = await fetch('http://localhost:8080/user', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({email: name }) // name is email
        })

        console.log('/user by email response, ', response)

        const data = await response.json()

        // if its a bad response
        if(!response.ok){
          console.log('failed to fetch user details,', data.message)
          return
        }
        
        // when is fetched -> update cart state for the api response data

        const cartItems = data.user.cartItems.map(c => c.product)

        console.log('app.jsx, api cart items data', cartItems)
        dispatch(setCartDetailsFromDB( cartItems ))      
        
      } catch (error) {
        console.log('Error fetching cart itmes, ', error)
      }
    }

    // call the fetchcart itmes function
    fetchCartitems()
  }, [isLoggedIn]) // run this useEffect every time isLoggedIn is changed.

  
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