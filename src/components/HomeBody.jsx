import Search from "./Search"
import Categories from "./Cateogories"
import Hero from "./Hero"




function Homebody({uniqueCategory}){

    console.log('home body comp')
    console.log('categories: ', uniqueCategory)

    return(
        <main className=" flex flex-col gap-4 p-4 min-w-screen  " >

            {/* only for mobile screen */}
            <div className=" flex justify-center items-center lg:hidden md:hidden w-full " >
                <Search   />
            </div>

            {/* hero section  */}
                {/* categories */}
                <div id='categoriesDisplay' className=" flex items-center w-screen max-w-[100%] gap-4 overflow-x-scroll pl-4 pr-4  " >
                    {uniqueCategory.map((c) => { return <Categories c={c} /> })}
                </div>

                {/* Hero banner */}
                <div className=" w-full flex justify-center items-center mt-4  overflow-hidden" >
                    <section id='heroBan' className=" flex w-full shadow-2xl " >
                        <Hero />
                    </section>
                </div>
            
        </main>
    )
}

export default Homebody