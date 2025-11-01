import Search from "./Search"
import Categories from "./Cateogories"
import Hero from "./Hero"




function Homebody({uniqueCategory}){

    console.log('home body comp')
    console.log('categories: ', uniqueCategory)

    return(
        <main className=" flex flex-col justify-center items-center gap-4 p-4 max-w-[95%] bg-blue-100 rounded-[10px]  shadow-2xl mt-6  " >

            {/* only for mobile screen */}
            <div className=" flex justify-center items-center lg:hidden md:hidden w-full " >
                <Search   />
            </div>

            {/* welcome message */}
            <div id='productPage_welcome_msg' className=" flex flex-col justify-center items-center text-center " >
                <h1 className=" text-2xl text-center font-bold text-gray-800 mb-1 " >Discover What’s Trending on  <span className=" text-orange-500 " >Shoppy</span><span className=" text-blue-800 " >Globe</span>  </h1>

                <h3 className=" font-medium " >From everyday essentials to global must-haves — explore our top-rated picks and find something you’ll love.</h3>

                <p className=" mt-4 italic font-semibold " > <span className=" text-orange-500 " >🛒 Shop Smart.</span> <span className=" text-blue-800 " >Shop Global.</span> </p>
            </div>

            {/* hero section  */}
                {/* categories */}
                <div id='categoriesDisplay' className=" flex items-center w-full max-w-[100%] gap-4 overflow-x-scroll pl-4 pr-4  " >
                    {uniqueCategory.map((c) => { return <Categories c={c} /> })}
                </div>

                {/* Hero banner */}
                <div className=" w-full flex justify-center items-center mt-4  overflow-hidden" >
                    <section id='heroBanner' className=" flex w-full shadow-2xl " >
                        <Hero />
                    </section>
                </div>
            
        </main>
    )
}

export default Homebody