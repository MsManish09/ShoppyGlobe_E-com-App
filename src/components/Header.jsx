
// import icons
import { CiShoppingCart } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";

// import components
import Search from "./Search";




function Header(){

    return(
        <div >
            <header className=" w-screen h-[15vh] lg:h-[12vh] bg-gradient-to-r from-orange-400 to-blue-400 sticky " >

                <nav className=" flex flex-col lg:flex-row md:flex-row justify-center lg:justify-evenly items-center h-full gap-4 " >

                    {/* site logo */}
                    <img src="src/utils/shoppyGlobe_logo.png" alt="" className=" w-[20%] h-[40%] lg:h-[80%] " />

                    {/* navigation items */}
                    <ul className=" flex justify-evenly  items-center w-[75%] text-[1.2rem] font-semibold gap-4  " >
                        
                        {/* search comp inside nav only for desktop view */}
                        <li className=" w-[40%] hidden lg:flex " >
                            <Search />
                        </li>

                        <li className="navItems" >
                            <FaHome />
                            Home
                        </li>

                        <li className="navItems" >
                            <AiFillProduct />
                            Products
                        </li>
                        <li className="navItems" >
                            <CiShoppingCart />
                            Cart
                        </li>
                    </ul>
                    
                </nav>
            </header>
        </div>
    )
}

export default Header