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


function App(){

  const productAPI = 'https://dummyjson.com/products'
  const  [product, setProduct] = useState([])
  const [uniqueCategory,  setUniqueCategory] = useState([])
  const [cart, setCart] = useState([])


  // use useEffect to fetch api data
   useEffect( ()=>{
    
    axios.get( productAPI )
    .then(response => {
      console.log(response)

      // extact products
      const products = response.data.products
      setProduct(products) // extract products dtails from api data 


      // get all the unique categories
      const unique = [...new Set(products.map((p) => p.category))];
      setUniqueCategory(unique);

    })
    // is api fetch fails
    .catch(error => {
      console.log('error fetching api data', error)
    })

   }, [])

   // to see the updated product and categories
   useEffect(()=>{
  
    console.log('Products: ',product)
    console.log('Unique Categoreies: ',uniqueCategory)

   }, [product, uniqueCategory])


  return(
    <div className=" flex flex-col justify-center items-center max-w-screen " >
      <Header classname=' sticky top-0 ' />
      <Routes>
        <Route path='/' element= {<Homebody uniqueCategory={uniqueCategory} />} />
        <Route path='*' element= {<ErrorPage  />} />
        <Route path='/product/:name' element={ <SearchProduct product={product} cart={cart} setCart={setCart} /> } />
        <Route path='/product_details/:id' element= {<ProductDetails product={product} cart={cart} setCart={setCart}/>} />
      </Routes>
      
    </div>
  )
}

export default App