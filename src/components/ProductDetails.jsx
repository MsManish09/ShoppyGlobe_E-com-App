import { useParams } from "react-router-dom"

import { FaCartPlus } from "react-icons/fa6";
import { useEffect } from "react";


function ProductDetails({product,cart, setCart}){

    let {id} = useParams()
    // console.log(id)
    // console.log( typeof id )
    id = parseInt(id)
    // console.log( parseInt(id) )
    // console.log(id,' : ',typeof id)

    const currentProduct = product.find((p)=>p.id == id)
    console.log(currentProduct)


    // add to cart functionlality
    function HandleClick(e){
        setCart((prev) => [...prev, currentProduct]);
        // console.log('items in cart', cart)
        alert('item added to your cart...')
    }

    useEffect(() => {
        console.log("Updated cart:", cart);
    }, [cart]);

    return(
        <div className=" flex flex-col justify-center items-center p-4 m-6 bg-gray-100 rounded-[10px] shadow-2xl w-[95%] lg:w-[80vw] md:w-[90vw] flex-wrap " >
            {/* product details -> img, title, brand etc */}
            <section className=" flex flex-col lg:flex-row md:flex-row w-full " >

                {/* image */}
                <div className="w-full lg:w-[50%] md:w-[50%]  p-auto " >
                    <img src={currentProduct.thumbnail} alt="" className=" m-auto " />
                </div>

                {/* details */}
                <div className=" w-full lg:w-[50%] md:w-[50%] p-4 flex flex-col gap-2   " >
                    <h1 className=" text-2xl font-semibold text-blue-900 " >{currentProduct.title}</h1>
                    <p className="  text-orange-400 text-[.8rem] " > <span>{currentProduct.category}</span>, by     <span className="font-semibold underline " >{currentProduct.brand }</span> 
                        <span className=" ml-1 " > {currentProduct.rating}⭐</span>
                    </p>
                    {/* price and disc */}
                    <h2 className=" text-[1.5rem] font-semibold flex gap-2 text-green-700 " >
                         
                        <span className="  " > ₹{Math.floor(currentProduct.price * 90)} </span>

                        {/*original price  */}
                        <span className=" text-blue-900 line-through text-[1.2rem] flex justify-center items-center " > ₹{Math.floor(currentProduct.price * 90 / (1 - (currentProduct.discountPercentage / 100)))}</span>

                        <span className=" bg-orange-500 pl-2 pr-2 text-white font-semibold shadow-2xl " >  {currentProduct.discountPercentage}% OFF </span>
                    </h2>

                    {/* description of the product */}
                    <h3 className=" lg:text-[1.2rem] md:text-[1.2rem]  " >
                        {currentProduct.description}
                    </h3>

                    <h3 className=" lg:text-[1.2rem] md:text-[1.2rem] font-medium  " >
                        Return Policy: {currentProduct.returnPolicy}
                    </h3>

                    <h3 className=" lg:text-[1.2rem] md:text-[1.3rem] font-medium text-blue-900  " >
                        Warranty Information: {currentProduct.warrantyInformation}
                    </h3>

                    {/* stock availability status */}
                    <h3 className=" flex gap-3 " >
                        <span className={` pl-2 pr-2 text-white w-fit ${currentProduct.availabilityStatus === 'In Stock' ? 'bg-green-800' : 'bg-red-800'}`} >
                                {currentProduct.availabilityStatus}
                        </span>

                        <span className=" italic text-gray-800 " >
                            {currentProduct.shippingInformation}
                        </span>
                    </h3>

                    {/* dimension details */}
                    <div className=" flex gap-2 " >
                        <h3 className=" font-medium underline " >Dimensions: </h3>
                        {
                            Object.entries(currentProduct.dimensions).map(([key, value]) => (
                                <h3 key={key}>
                                    {key}: <span className=" font-medium " >{value}mm</span>
                                </h3>))
                        }
                    </div>

                    {/* add to cart button */}
                    <button className=" flex justify-center items-center gap-2 mt-4 p-2 bg-orange-500 border-3 border-solid border-orange-200 text-2xl text-white font-semibold rounded-[10px] hover:scale-95 hover:bg-blue-700 hover:border-blue-300 shadow-2xl " onClick={HandleClick} >
                        <FaCartPlus />
                        <span>Add to Cart</span>
                    </button>

                </div>
            </section>

            {/* Reviews */}
            <section className=" flex flex-col gap-4 border-t-2 border-solid border-gray-300 w-full mt-4 p-4 " >
                
                <h2 className=" text-2xl font-semibold underline text-blue-900 " >Ratings & Reviews </h2>

                {/* user reviews */}
                {currentProduct.reviews.map((r)=>{
                    return(
                        <div className=" p-2 bg-gray-200 rounded-[10px] border-2 border-solid border-gray-400 shadow-2xl flex justify-between items-center " >
                            {/* review and rating */}
                            <div className=" flex w-[80%] h-fit justify-center items-center   " >
                                <div className=" flex justify-center items-center w-[20%] text-[1.2rem] h-full font-semibold  p-2 " >
                                    <h2>{r.rating}⭐</h2>
                                </div>
                                <div className=" flex justify-start items-center w-[80%] h-full text-[1.2rem] font-medium border-l-2 border-solid border-gray-300 p-2  " >
                                    <h3> {r.comment} </h3>
                                </div>
                            </div>
                            {/* reviewer and time */}
                            <div className=" flex flex-col justify-start items-start gap-1 p-4  " >
                                <h2 className=" text-2xl font-semibold text-orange-600 " >{r.reviewerName}</h2>
                                <p className="italic text-[.8rem] text-blue-900 font-medium " > {r.date} </p>
                            </div>
                        </div>
                    )
                })}

            </section>

            {/* related products */}
            <section></section>
        </div>
    )
}

export default ProductDetails