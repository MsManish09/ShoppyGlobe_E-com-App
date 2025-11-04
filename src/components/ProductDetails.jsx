import { useParams } from "react-router-dom"

function ProductDetails({product}){

    let {id} = useParams()
    // console.log(id)
    // console.log( typeof id )
    id = parseInt(id)
    // console.log( parseInt(id) )
    // console.log(id,' : ',typeof id)

    const currentProduct = product.find((p)=>p.id == id)
    console.log(currentProduct)

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

                        <span className=" bg-orange-500 pl-2 pr-2 text-white font-semibold " >  {currentProduct.discountPercentage}% OFF </span>
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
                                    {key}: <span className=" font-medium " >{value}</span>
                                </h3>))
                        }
                    </div>

                    {/* add to cart button */}
                    <button className=" mt-4 p-2 bg-orange-500 text-2xl text-white font-semibold rounded-[10px] hover:scale-95 hover:bg-blue-700 " >Add to Cart</button>

                </div>

            </section>

            {/* related products */}
            <section></section>

            {/* Reviews */}
            <section></section>
        </div>
    )
}

export default ProductDetails