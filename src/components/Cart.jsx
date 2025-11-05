import { useEffect } from "react"
import { Link } from "react-router-dom"

function Cart({cart, setCart}){

    const totalPrice = cart.reduce((sum, currentItem) => {
        return sum + currentItem.price;
    }, 0);

    useEffect(()=>{
        console.log(cart)
    },[ cart ] )

    // when cart is empty
    if( cart.length == 0 ){
        return(
            <div className=" w-[90vw] h-[80vh] flex justify-center items-center " >
            <div className=" bg-gradient-to-br from-blue-500 via-indigo-300 to-orange-500 rounded-[10px] flex flex-col  p-8 justify-center items-center shadow-2xl flex-wrap text-center  " >
                <h1 className=" text-2xl font-semibold text-blue-900 " >The Lonely Cart😔</h1>
                <h2 className=" italic font-light mb-2 " >Your cart’s feeling a little… empty inside.</h2>
                <p className=" text-blue-700 text-[1.2rem]  " >Don’t leave it hanging — add some goodies and give it purpose!</p>
                {/* cta */}
                <button className=" p-2 bg-orange-500 text-[1rem] font-semibold text-white rounded-[10px] mt-4 shadow-2xl hover:scale-105 " >👉 Start filling the void</button>
            </div>
            </div>
        )
    }
    
    return(
        <div className="flex flex-col gap-6 w-full mt-10 justify-center items-center mb-15  " >

            <h1 className=" p-2 bg-gradient-to-br from-orange-500 to-blue-600 text-white text-2xl font-semibold rounded-[10px] " >Cart Items</h1>

            {/* render cart items */}
            {cart.map((p)=> cartProductsCard(p) )}

            {/* total price dispaly and bulk buy section */}
            <div className="  flex flex-col  items-center  w-[90%] lg:w-[40%] md:w-[40%] text-2xl font-bold  border-t-2 border-solid border-gray-300  gap-4 " > 
                <h2 className=" mt-5 bg-orange-400 text-white w-full p-4 text-center  "  >Total: ₹ { totalPrice * 90 }</h2>
                
                {/* buy now button for entire cart */}
                <button className="  bg-blue-600 text-white w-full p-4 text-center hover:bg-blue-800 hover:scale-95 " >Buy Now</button>

            </div>
        </div>
    )
}


function cartProductsCard(p){
    return(
        <div className=" bg-blue-100 flex flex-col justify-center items-center gap-1.5 w-[90%] lg:w-[40%] md:w-[40%] min-h-[220px] p-4 shadow-2xl border-2 border-solid border-white rounded-2xl " >

            
            {/* product details */}
            <div className=" flex gap-2 w-full h-[170px] " >

                <img src={p.thumbnail} alt="" className=" w-[45%] h-[180px] "  />

                {/* title and pricing */}
                <div className=" h-full flex flex-col justify-center items-center " >
                    <h1 className=" text-2xl font-semibold text-blue-900 " >{p.title}</h1>

                    <p className="  text-orange-400 text-[.8rem] " > <Link to={`/category/${p.category}`} > <span className=" hover:scale-105 hover:font-medium hover:text-blue-600 hover:underline " >{p.category}</span></Link>, by     <span className="font-semibold underline " >{p.brand }</span> 
                        <span className=" ml-1 " > {p.rating}⭐</span>
                    </p>

                    <h2 className=" text-[1.5rem] font-semibold flex gap-2 text-green-700 " >
                         
                        <span className="  " > ₹{Math.floor(p.price * 90)} </span>

                        {/*original price  */}
                        <span className=" text-blue-900 line-through text-[1.2rem] flex justify-center items-center " > ₹{Math.floor(p.price * 90 / (1 - (p.discountPercentage / 100)))}</span>

                        <span className=" bg-orange-500 pl-2 pr-2 text-white font-semibold shadow-2xl hidden lg:flex md:flex " >  {p.discountPercentage}% OFF </span>
                    </h2>
                </div>
            </div>

            {/* buy now(individual products) and remove buttons */}
            <div className=" w-full flex gap-2 " >
                {/* remove btn */}
                <button className=" p-2 bg-red-600 text-white text-[1rem] font-semibold rounded w-[50%] hover:bg-red-800 hover:scale-95 " >Remove</button>

                {/* buy now */}
                <button className=" p-2 bg-blue-600 text-white text-[1rem] font-semibold rounded w-[50%] hover:bg-blue-800 hover:scale-95 " >Buy Now</button>
            </div>

        </div>
    )
}

export default Cart