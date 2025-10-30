import Search from "./Search"


function Homebody(){

    return(
        <main className=" flex flex-col gap-2 p-4 min-w-screen  bg-amber-100  " >

            {/* only for mobile screen */}
            <div className=" flex justify-center items-center lg:hidden md:hidden w-full " >
                <Search   />
            </div>

            {/* hero section  */}
            
        </main>
    )
}

export default Homebody