import Search from "./Search"
import Categories from "./Cateogories"
import Hero from "./Hero"
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom"




function Homebody({uniqueCategory, product}){

    console.log('home body comp')
    console.log('categories: ', uniqueCategory)

    const beautyProducts = product.filter((p)=> p.category.toLowerCase() == 'beauty')
    const topRatedProducts = product.filter((p)=>p.rating >= 4)
    const groceries = product.filter((p)=> p.category.toLowerCase() == 'groceries')

    return(
        <main className=" flex flex-col justify-center items-center gap-4 p-4 max-w-[95%] bg-blue-100 rounded-[10px]  shadow-2xl mt-6 mb-8 " >

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
                    {uniqueCategory.map((c, index) => { return <Categories c={c} key={index} /> })}
                </div>

                {/* Hero banner */}
                <div className=" w-full flex justify-center items-center mt-4  overflow-hidden" >
                    <section id='heroBanner' className=" flex w-full shadow-2xl " >
                        <Hero />
                    </section>
                </div>

            {/* beauty products section */}
            <section id='beauty_products' className=" flex flex-col w-full flex-wrap mt-6 p-6 gap-4 bg-gradient-to-br from-blue-300 to-purple-300 rounded-2xl shadow-2xl " >

                <Link to='/category/beauty' >
                    <h2 className=" font-bold text-center text-2xl mb-4 bg-gradient-to-br from-purple-600 to-blue-600 text-white p-3 rounded-2xl w-fit m-auto hover:scale-95 hover:text-violet-300 " >Top rated <span className=" text-pink-300 underline " >beauty</span> products</h2>
                </Link>
                
                <div className=" flex flex-col lg:flex-row md:flex-row w-full gap-2 " >
                    
                    <div className=" w-full max-h-300px lg:w-[25%] md:w-[30%] rounded-2xl " >
                        <img src="src\utils\beauty_product_banner.webp" alt="" className="rounded-2xl " />
                    </div>

                    <div className=" flex flex-wrap w-full lg:w-[75%] md:w-[70%] justify-evenly items-center gap-4 " >
                        { beautyProducts.map((p)=> <ProductCard product={p} /> ) }
                    </div>
                </div>
            </section>


            {/* top-rated products -> 4+ rating */}
            <section id='beauty_products' className=" flex flex-col w-full flex-wrap mt-6 p-6 gap-4 bg-gradient-to-br from-amber-300 to-orange-300 rounded-2xl shadow-2xl " >

                
                <h2 className=" font-bold text-center text-2xl mb-4 bg-gradient-to-br from-violet-600 to-blue-600 text-white p-3 rounded-2xl w-fit m-auto hover:scale-95 hover:text-blue-300 " >Top rated products <span className=" underline  " >for you</span></h2>
                
                <div className=" flex flex-col lg:flex-row md:flex-row w-full gap-2 " >
                    
                    {/* banner */}
                    <div className=" w-full max-h-300px lg:w-[25%] md:w-[30%] rounded-2xl " >
                        <img src="src\utils\top_rated.webp" alt="" className="rounded-2xl " />
                    </div>
                    

                    <div className=" flex flex-wrap w-full lg:w-[75%] md:w-[70%] justify-evenly items-center gap-4 " >
                        {/* render at max 8 product */}
                        { topRatedProducts.slice(0, 8).map((p)=> <ProductCard product={p} /> ) }
                    </div>
                </div>
            </section>

            {/* groceries */}
            {/* top-rated products -> 4+ rating */}
            <section id='beauty_products' className=" flex flex-col w-full flex-wrap mt-6 p-6 gap-4 bg-gradient-to-br from-green-300 to-green-700 rounded-2xl shadow-2xl " >

                <Link to='/category/groceries'> 
                    <h2 className=" font-bold text-center text-2xl mb-4 bg-gradient-to-br from-pink-400 to-red-600 text-white p-3 rounded-2xl w-fit m-auto hover:scale-95 hover:text-blue-300 " >Groceries <span className=" underline " >for you</span></h2>
                </Link>
                
                <div className=" flex flex-col lg:flex-row md:flex-row w-full gap-2 " >
                    

                    <div className=" flex flex-wrap w-full lg:w-[75%] md:w-[70%] justify-evenly items-center gap-4 " >
                        {/* render at max 8 product */}
                        { groceries.slice(0, 8).map((p)=> <ProductCard product={p} /> ) }
                    </div>

                    {/* banner */}
                    <div className=" w-full max-h-300px lg:w-[25%] md:w-[30%] rounded-2xl justify-center items-center " >
                        <img src="src\utils\groceries_banner.png" alt="" className="rounded-2xl " />
                    </div>

                </div>
            </section>
            
        </main>
    )
}

export default Homebody