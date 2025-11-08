import { useSelector } from "react-redux"
import LoginModal from "./LoginModal"
import { useEffect, useState } from "react"
import PreviousOrder from "./PreviousOrder"

function UserProfile(){

    const { name, isLoggedIn, previouslyOrdredItems } = useSelector((state) => state.user)

    // create modal state
    const [showModal, setShowModal] = useState(false)

    useEffect(()=>{
        if(!isLoggedIn){
            setShowModal(true)
        }

        else{
            setShowModal(false)
        }
    },[isLoggedIn])


    return(

        <div className=" flex flex-col gap-6 " >
        <div className=" bg-gray-200 flex flex-col gap-4 justify-start items-center w-[95vw]  lg:w-[60vw] md:w-[70vw] p-4 mt-10 rounded-2xl shadow-2xl text-2xl font-semibold text-center text-blue-700 " >

            { !isLoggedIn && showModal &&(
                <LoginModal  onClose={()=> setShowModal(false)} />
            )}

            
             
            {/* name and image */}
            <div className=" w-full flex  gap-4 text-2xl font-bold text-blue-800 justify-center items-center border-b-2 border-solid border-gray-300 p-4 " >
            
                    <img src="src\utils\dummyProfileImage.webp" alt="" className=" w-[100px] h-[100px] rounded-[100%] "  />
                
                    <h1> {name} </h1>
                
                
            </div>

            {/* contact info */}
            <h2 className=" border-b-2 border-solid border-gray-300 p-2 w-full  " > Email: dummyAddress@email.com </h2>

            {/* address */}
            <h2 className=" border-b-2 border-solid border-gray-300 p-2 w-full  " >Address: dummyAddress, Bengaluru, india </h2>

        </div>

        {/* previous orders section */}
            <section className=" bg-gray-100 flex flex-col gap-4 justify-start items-center w-[95vw]  lg:w-[60vw] md:w-[70vw]  mt-10 rounded-2xl shadow-2xl text-2xl font-semibold text-center mb-10 " >
                <h2 className=" bg-blue-600 text-white w-full p-3 rounded-2xl " > Previous orders </h2>

                <div className=" flex flex-col gap-6 p-4 " >
                    {previouslyOrdredItems.length == 0? (
                        <h2> You haven't ordered yet! </h2>
                    ): previouslyOrdredItems.map((p)=> <PreviousOrder p={p} /> ) }
                </div>
            </section> 
        </div>
    )
}

export default UserProfile