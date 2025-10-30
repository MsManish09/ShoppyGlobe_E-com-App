import Header from "./components/Header"
import Homebody from "./components/HomeBody"

// import axiox
import axios from "axios";

function App(){

  const productAPI = 'https://dummyjson.com/products'
  let  product = []
  let category = []

    axios.get(productAPI)
    .then(response=>{

      console.log(response)

      product = response.data.products
      console.log(product)
      category = product.map((p)=> p.category)
      
      // get unique categories
      const uniqueCategory = []
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
      <Header />
      <Homebody />
    </div>
  )
}

export default App