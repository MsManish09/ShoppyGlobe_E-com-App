
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"

function SearchProduct({products}){

    const {searchTitle} =  useParams()
    console.log(searchTitle)
    const searchMatchProduct = products.filter((p)=>{
        return p.title.toLowerCase().includes(searchTitle.toLowerCase())
    } )

    return(
        <div>
            { searchMatchProduct.map((p)=> <ProductCard product={p} />) }
        </div>
    )
}

export default SearchProduct