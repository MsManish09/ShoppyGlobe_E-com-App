import { Link } from "react-router-dom"

function Categories({c}){

    console.log('categories comp')
    console.log(c)

    return(
        <Link to={`/category/${c}`} className=" flex justify-center items-center min-w-[30%] lg:min-w-[22%] lg:max-w-[22%] h-[100px] bg-gradient-to-bl  from-orange-200 to-orange-400 text-[1.2rem] font-extrabold  p-2 rounded-2xl hover:scale-95 text-blue-900 border border-solid border-blue-600 " >
            <div  >
                <h1>{c}</h1>
            </div>
        </Link>
    )
}

export default Categories