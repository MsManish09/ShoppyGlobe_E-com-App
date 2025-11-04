import { FaCartPlus } from "react-icons/fa6"
import { Link } from "react-router-dom"


function ProductCard({product}){
    
    return(

        <Link to={`/product_details/${product.id}`} className="p-4 flex flex-col justify-center items-center border-2 border-solid border-orange-200 bg-orange-50  w-[45%] h-[300px] overflow-hidden flex-wrap lg:w-[22%] md:w-[30%] rounded-[10px] hover:scale-95 hover:border-blue-500 shadow-2xl " >
            <div className=" flex flex-col justify-between h-full w-full " >

                <div className=" h-80% p-2  flex flex-col justify-start items-center overflow-hidden " >
                    <img src={product.thumbnail} alt={`${product.title} image`} className=" w-[75%] h-[75%] " />
                    <div>
                        <h1 className=" font-semibold " >{product.title}</h1>
                        <h2 className=" text-[1rem] font-medium flex gap-2 text-green-700 " >
                         
                        <span className="  " > ₹{Math.floor(product.price * 90)} </span>

                        {/*original price  */}
                        <span className=" text-blue-900 line-through text-[.8rem] flex justify-center items-center " > ₹{Math.floor(product.price * 90 / (1 - (product.discountPercentage / 100)))}</span>

                        <span className=" bg-blue-700 pl-2 pr-2 text-white font-medium " >  {product.discountPercentage}% OFF </span>
                    </h2>
                    </div>
                </div>

                {/* add to cart button */}
                <button className=" flex justify-center items-center gap-2 m-auto  p-2 bg-orange-500 border-3 border-solid border-orange-200 text-[1.2rem] text-white font-semibold rounded-[10px] hover:scale-95 hover:bg-blue-700 hover:border-blue-300 shadow-2xl h-[20%] w-[80%] " >
                    <FaCartPlus />
                    <span>Add to Cart</span>
                </button>
            </div>
        </Link>
    )
}

export default ProductCard