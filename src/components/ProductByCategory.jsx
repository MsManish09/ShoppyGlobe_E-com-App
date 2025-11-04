import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"
import { useEffect } from "react"
import Categories from "./Cateogories"



function ProductByCategory({product, cart, setCart}){
    
    const {category} = useParams()
    console.log(category)
    const filteredProducts = product.filter((p)=> p.category == category)
    

    useEffect(()=>{
        console.log('filteredProducts : ', filteredProducts)
    },[filteredProducts])

    return(
        <div className=" flex flex-col p-4 m-10 mt-6 bg-blue-100 rounded-[10px] gap-4 shadow-2xl " >

                <div className=" flex justify-center items-center w-full gap-4 flex-wrap " >
                    {[...new Set(product.map(p => p.category))].map(category => (
                        <Categories key={category} c={category} />))
                    }
                </div>
            

            <div className="flex justify-center items-center mt-8" >
                <h1 className=" text-2xl font-bold text-white bg-blue-700 p-2 rounded-[5px]  w-fit shadow-2xl " >Category: {category} </h1>
            </div>

            <div className=" flex gap-6 flex-wrap justify-center items-center w-full " >
                {
                    filteredProducts.map((p)=> <ProductCard product={p} cart={cart} setCart={setCart} />)
                }
            </div>
        </div>
    )
}


export default ProductByCategory