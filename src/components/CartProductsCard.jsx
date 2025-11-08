import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { removeFromCart } from "../redux/cart/cartSlice"

function CartProductsCard({p}){

    const dispatch = useDispatch()

    // purchase individual itmes and remove from cart
    function handlePurchase(e){
        alert(`order for ${p.title} placed...`)

        //  add item to user info < purchased itmes

        // remove item from the cart
        dispatch(removeFromCart(p.id))
    
    }

    function handleRemoveProduct(){
        alert(`${p.title} removed from the cart...`)

        // remove item from the cart
        dispatch(removeFromCart(p.id))
    }



    return(
        <div className=" bg-gradient-to-br from-orange-200  to-blue-200 flex flex-col justify-center items-center gap-1.5 w-[90%] lg:w-[40%] md:w-[40%] min-h-[220px] p-4 shadow-2xl border-2 border-solid border-white rounded-2xl " >

            
            {/* product details */}
            <div className=" flex gap-2 w-full h-[170px] " >

                <img src={p.thumbnail} alt="" className=" w-[45%] h-[180px] "  />

                {/* title and pricing */}
                <div className=" h-full flex flex-col justify-center items-center " >
                    <h1 className=" text-2xl font-semibold text-blue-700 " >{p.title}</h1>

                    <p className="  text-orange-400 text-[1rem] " > <Link to={`/category/${p.category}`} > <span className=" hover:scale-105 hover:font-medium hover:text-blue-600 hover:underline " >{p.category}</span></Link>, by     <span className="font-semibold underline " >{p.brand }</span> 
                        <span className=" ml-1 " > {p.rating}⭐</span>
                    </p>

                    <h2 className=" text-[1.5rem] font-semibold flex gap-2 text-green-700 " >
                         
                        <span className="  " > ₹{Math.floor(p.price * 90)} </span>

                        {/*original price  */}
                        <span className=" text-blue-900 line-through text-[1.2rem] flex justify-center items-center " > ₹{Math.ceil(p.price * 90 / (1 - (p.discountPercentage / 100)))}</span>

                        <span className=" bg-orange-500 pl-2 pr-2 text-white font-semibold shadow-2xl hidden lg:flex md:flex " >  {Math.ceil(p.discountPercentage)}% OFF </span>
                    </h2>
                </div>
            </div>

            {/* buy now(individual products) and remove buttons */}
            <div className=" w-full flex gap-2 " >
                {/* remove btn */}
                <button className=" p-2 bg-red-600 text-white text-[1rem] font-semibold rounded w-[50%] hover:bg-red-800 hover:scale-95 " onClick={handleRemoveProduct} >Remove</button>

                {/* buy now */}
                <button className=" p-2 bg-blue-600 text-white text-[1rem] font-semibold rounded w-[50%] hover:bg-blue-800 hover:scale-95 " name={p.id} onClick={handlePurchase}  >Buy Now</button>
            </div>

        </div>
    )
}

export default CartProductsCard