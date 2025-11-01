

function ProductCard({product}){
    
    return(
        <div className=" p-4 flex flex-col justify-center items-center border-2 border-solid border-red-100 bg-green-200 " >
            <h1>{product}</h1>
        </div>
    )
}

export default ProductCard