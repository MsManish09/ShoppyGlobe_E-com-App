
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"

function SearchProduct({product}){

    const {name} =  useParams()
    console.log('search products page...')
    console.log(name)

    const searchMatchProduct = product.filter((p)=>{
        return p.title.toLowerCase().includes(name.toLowerCase())
    } )

    console.log('search product: ',searchMatchProduct)

    // if no match
    if(searchMatchProduct.length == 0){
        return(
            <div className=" flex justify-center items-center h-[80vh] w-full text-orange-400 text-2xl font-semibold underline " >
                <h1>That product’s not on our shelves <span className=" text-blue-800 font-bold " >(yet)!</span></h1>
            </div>
        )
    }

    return(
        <div className=" m-4 flex flex-wrap gap-5 justify-start items-start w-[95%]  " >
            { searchMatchProduct.map((p)=> <ProductCard product={p} key={p.title} />) }
        </div>
    )
}

export default SearchProduct