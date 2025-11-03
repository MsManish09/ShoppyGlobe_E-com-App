

function ProductCard({product}){
    
    return(
        <div className=" p-4 flex flex-col justify-center items-center border-2 border-solid border-orange-300 bg-orange-50  w-[45%] h-[300px] overflow-hidden flex-wrap lg:w-[22%] md:w-[30%] rounded-[10px] hover:scale-95 hover:border-blue-500 shadow-2xl " >
            <h1>{product.title}</h1>
        </div>
    )
}

export default ProductCard