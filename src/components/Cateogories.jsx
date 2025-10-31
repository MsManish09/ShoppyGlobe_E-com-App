
function Categories({c}){

    console.log('categories comp')
    console.log(c)

    return(
        <div className=" flex justify-center items-center min-w-[30%] lg:min-w-[22%] lg:max-w-[22%] h-[100px] bg-orange-400 text-[1.2rem] font-bold  p-2 rounded-2xl hover:scale-95 text-blue-800 border border-solid border-blue-600 " >
            <h1>{c}</h1>
        </div>
    )
}

export default Categories