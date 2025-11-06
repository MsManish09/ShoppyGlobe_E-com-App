import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CartModal from "./CartModal";
import CartProductsCard from "./CartProductsCard";

function Cart({cart, setCart}){

    const [showModal, setShowModal] = useState(false)

    const totalPrice = cart.reduce((sum, currentItem) => {
        return sum + currentItem.price;
    }, 0);

    // auto re-render after cart items changes.
    useEffect(()=>{
        console.log(cart)
    },[ cart ] )

    // buy now functionality,
    function handleBuyNow(){
        setShowModal(true)
    }



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
        <div className="flex flex-col gap-6 w-full  mt-10 justify-center items-center mb-15 " >

            <h1 className=" p-2 bg-gradient-to-br from-orange-500 to-blue-600 text-white text-2xl font-semibold rounded-[10px] " >Cart Items</h1>

            {/* render cart items */}
            {cart.map((p)=> <CartProductsCard p={p} cart={cart} setCart={setCart} /> )}

            {/* total price dispaly and bulk buy section */}
            <div className="  flex flex-col  items-center  w-[90%] lg:w-[40%] md:w-[40%] text-2xl font-bold  border-t-2 border-solid border-gray-300  gap-4 " > 
                <h2 className=" mt-5 bg-orange-400 text-white w-full p-4 text-center  "  >Total: ₹ { Math.ceil(totalPrice * 90) }</h2>
                
                {/* buy now button for entire cart */}
                <button className="  bg-blue-600 text-white w-full p-4 text-center hover:bg-blue-800 hover:scale-95 " onClick={ handleBuyNow }  >Buy Now</button>

            </div>

            {/* modal */}
                {showModal && (
                    <CartModal message={`Order for ${cart.map((p) => p.title).join(', ') } placed`} onClose={()=>{ 
                        setShowModal(false)
                        // after modal close -> empty cart items after 1sec
                        setTimeout(() => {
                            setCart([])
                        }, 300);
                    }} />
                )}

        </div>
    )
}




export default Cart