
function Search(){

    return(
        <div className=" w-full flex justify-center gap-1 " >
            <input type="text" placeholder="Ex: books" className=" w-[75%] p-2 bg-white border border-solid border-orange-500 rounded-[10px] " />
            <button className= " p-2 bg-orange text-blue-950 bg-orange-500 border border-solid border-orange-500 rounded-[10px] text-center hover:scale-90 hover:bg-blue-600 hover:text-white " >Search</button>
        </div>
    )
}

export default Search