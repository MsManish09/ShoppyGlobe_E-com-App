
function Header(){
    return(
        <div >
            <header className=" w-screen h-[15vh] lg:h-[12vh] bg-blue-50 " >

                <nav className=" flex flex-col lg:flex-row md:flex-row justify-center lg:justify-evenly items-center h-full gap-4 " >

                    <img src="src/utils/shoppyGlobe_logo.png" alt="" className=" w-[20%] h-[40%] lg:h-[80%] " />

                
                    <ul className=" flex justify-evenly  items-center w-[75%] text-[1.2rem] font-semibold  " >
                        <li className=" w-[40%] hidden lg:flex " >Search</li>
                        <li className="navItems" >Home</li>
                        <li className="navItems" >Products</li>
                        <li className="navItems" >Cart</li>
                    </ul>
                    
                </nav>
            </header>
        </div>
    )
}

export default Header