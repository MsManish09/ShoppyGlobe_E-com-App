import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Search(){

    const [searchProduct, setSearchProduct] = useState('')
    const navigate= useNavigate()

    function handleChange(e){
        setSearchProduct(e.target.value)
    }

    function handleSearch(){
        // if search button is clicked with empty input field, dont navigate to search product page.
        if(searchProduct.length == 0){
            alert('Search query is empty...')
            return
        }
        navigate(`/product/${searchProduct}`)
    }

    return(
        <div className=" w-full flex justify-center gap-1 " >
            <input type="text" placeholder="Ex: books" className=" w-[75%] p-2 bg-white border border-solid border-orange-500 rounded-[10px] " onChange={handleChange}  />
            <button className= " p-2 bg-orange text-blue-950 bg-orange-500 border border-solid border-orange-500 rounded-[10px] text-center hover:scale-90 hover:bg-blue-600 hover:text-white " onClick={handleSearch} >Search</button>
        </div>
    )
}

export default Search