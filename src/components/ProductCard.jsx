import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"

import { setCartDetailsFromDB } from "../redux/cart/cartSlice" //add to cart reducer fn
import LoginModal from "./LoginModal";



function ProductCard({product}){

    const dispatch = useDispatch()
    // const { addToCart, removeFromCart, clearCart } = useSelector((state)=> state.cart) 

    const { isLoggedIn, name } = useSelector((state) => state.user)

    // create modal state
    const [showLogInModal, setShowLogInModal] = useState(false)

    // add to cart functionlality
        async function HandleClick(e){
    
            if(!isLoggedIn){
                setShowLogInModal(true)
                return
            }
            
           try {
    
            // get token form localStrage
                const token = localStorage.getItem('token')
    
                // call api to send itme to cart
                const response = await fetch('http://localhost:8080/cart', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}` // for token Authentication
                    },
                    body: JSON.stringify({
                        email: name,
                        product: product,
                        quantity: 1
                    })
                })
    
                const data = await response.json()
    
                // if api call failed
                if(!response.ok){
                    alert(data.message)
                    return
                }
    
                // update redux -> from mongoDb cart
                console.log(data.user.cartItems.map(c => c.product), "added to cart")
                dispatch(setCartDetailsFromDB(
                    data.user.cartItems.map(c => c.product)
                ))
                alert( `${product.title} added to your cart...` )
            
                setShowLogInModal(false)
            
           } catch (error) {
            console.log(error)
            alert('failed to add to cart')
           }
        }
    
        // useEffect(() => {
        //     console.log("product:", product);
        // }, [product]);
    
    return(

        <>
        {/* login modal, if user not loged in yet */}
            { !isLoggedIn && showLogInModal &&(
                <LoginModal  onClose={()=> setShowLogInModal(false)} /> )
            }

        <Link to={`/product_details/${product.id}`} className="p-4 flex flex-col justify-center items-center border-2 border-solid border-orange-200 bg-orange-50  w-[46%] h-[300px] overflow-hidden flex-wrap lg:w-[22%] md:w-[30%] rounded-[10px] hover:scale-95 hover:border-blue-500 shadow-2xl " >
            <div className=" flex flex-col justify-between h-full w-full " >

                <div className=" h-80% p-2  flex flex-col justify-start items-center overflow-hidden " >
                    <img src={product.thumbnail} alt={`${product.title} image`} className=" w-[75%] h-[75%] " />
                    <div>
                        <h1 className=" font-semibold " >{product.title}</h1>
                        <h2 className=" text-[.8rem] md:text-[1rem] lg:text-[1rem] font-normal flex gap-1 text-green-700 " >
                         
                            <span className="  " > ₹{Math.ceil(product.price * 90)} </span>

                            {/*original price  */}
                            <span className=" text-blue-900 line-through text-[.6rem] md:text-[.8rem]  lg:text-[.8rem] flex justify-center items-center " > ₹{Math.ceil(product.price * 90 / (1 - (product.discountPercentage / 100)))}</span>

                            <span className=" bg-blue-700 pl-1 pr-1 text-white font-light " >  {Math.ceil(product.discountPercentage)}% OFF </span>
                        </h2>
                    </div>
                </div>

                {/* add to cart button */}
                <button className=" flex justify-center items-center gap-2 m-auto  p-2 bg-orange-500 border-3 border-solid border-orange-200 text-[.9rem] lg:text-[1.2rem] md:text-[1.2rem] text-white font-semibold rounded-[10px] hover:scale-95 hover:bg-blue-700 hover:border-blue-300 shadow-2xl w-[95%] h-[20%] lg:w-[80%] md:w-[80%]  " onClick={(e)=>{
                    e.preventDefault() // stop link trigger
                    HandleClick(e)
                }} >
                    <FaCartPlus />
                    <span>Add to Cart</span>
                </button>
            </div>
        </Link>
        </>

    )
}

export default ProductCard