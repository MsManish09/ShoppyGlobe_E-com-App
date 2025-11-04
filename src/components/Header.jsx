
// import icons
import { CiShoppingCart } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";

// import components
import Search from "./Search";
import { Link } from "react-router-dom";




function Header(){

    return(
        <div >
            <header className=" w-screen h-[15vh] lg:h-[12vh] bg-gradient-to-r from-orange-400 to-blue-400 sticky top-0 z-50 " >

                <nav className=" flex flex-col lg:flex-row md:flex-row justify-center lg:justify-evenly items-center h-full gap-4 " >

                    {/* site logo */}
                    <Link to='/'  className=" flex justify-center items-center w-[20%] h-[40%] lg:h-[75%] " >
                        <img src="src/utils/shoppyGlobe_logo.png" alt="" className="  hover:scale-95 " />
                    </Link>

                    {/* navigation items */}
                    <ul className=" flex justify-evenly  items-center w-[75%] text-[1.2rem] font-semibold gap-4  " >
                        
                        {/* search comp inside nav only for desktop view */}
                        <li className=" w-[40%] hidden lg:flex " >
                            <Search />
                        </li>

                        <li  >
                            <Link to='/' className="navItems">
                            <FaHome />
                            Home
                            </Link>
                        </li>

                        <li className="navItems" >
                            <AiFillProduct />
                            Profile
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