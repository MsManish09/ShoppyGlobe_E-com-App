import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header"
import Homebody from "./components/HomeBody"

// import axiox
import axios from "axios";

// import react routes
import { Routes, Route } from "react-router-dom";


function App(){

  const productAPI = 'https://dummyjson.com/products'
  let  product = []
  let category = []
  let uniqueCategory = []

    axios.get(productAPI)
    .then(response=>{

      console.log(response)

      product = response.data.products
      console.log(product)
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

  return(
    <div>
      <Header classname=' sticky top-0 ' />
      <Routes>
        <Route path='/' element= {<Homebody uniqueCategory={uniqueCategory} />} />
        <Route path='*' element= {<ErrorPage  />} />
      </Routes>
      
    </div>
  )
}

export default App