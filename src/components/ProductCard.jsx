

function ProductCard({product}){
    
    return(
        <div className=" p-4 flex flex-col justify-center items-center border-2 border-solid border-orange-400 bg-green-200 w-[40%] h-[300px] overflow-hidden flex-wrap lg:w-[25%] md:w-[30%] rounded-[10px] hover:scale-95 hover:border-blue-900 " >
            <h1>{product.title}</h1>
        </div>
    )
}

export default ProductCard