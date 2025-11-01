import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header"
import Homebody from "./components/HomeBody"


// import axiox
import axios from "axios";

// import react routes
import { Routes, Route } from "react-router-dom";
import SearchProduct from "./components/SearchProduct";
import { useEffect, useState } from "react";


function App(){

  const productAPI = 'https://dummyjson.com/products'
  const  [product, setProduct] = useState([])
  let category = []
  let uniqueCategory = []

  useEffect(()=>{
    
    axios.get(productAPI)
    .then(response=>{
      // console.log(response)

      setProduct(response.data.products) 
      console.log('product',product)
      category = product.map((p)=> p.category)
      
      // get unique categories
      
      category.forEach(c => {
        if(!uniqueCategory.includes(c)){
          uniqueCategory.push(c)
        }
      });

      console.log(uniqueCategory)
      
    })
    .catch(error => {
        console.log(error)
    })
  },[])
    

  return(
    <div className=" flex flex-col justify-center items-center max-w-screen " >
      <Header classname=' sticky top-0 ' />
      <Routes>
        <Route path='/' element= {<Homebody uniqueCategory={uniqueCategory} />} />
        <Route path='*' element= {<ErrorPage  />} />
        <Route path='/product/:name' element={ <SearchProduct product={product} /> } />
      </Routes>
      
    </div>
  )
}

export default App