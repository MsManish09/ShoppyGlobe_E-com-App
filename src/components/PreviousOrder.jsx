

function PreviousOrder({p}){

    return(
        <div className=" flex  justify-evenly items-center gap-3 shadow-2xl rounded-2xl p-4 border-2 border-solid border-white " >
            <img src={p.thumbnail} alt="" className=" w-[150px] h-[200px] "  />

            <div className=" flex flex-col gap-4 " >
                <h2> {p.title} </h2>
                <h2 className=" text-blue-700 " > ₹ {Math.ceil(p.price *90 )} </h2>
            </div>
        </div>
    )
}

export default PreviousOrder