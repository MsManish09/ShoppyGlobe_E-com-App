import { useEffect, useState } from "react"

// import reducers
import { setName, setPassword, login } from "../redux/user/userSlice"
import { useDispatch, useSelector } from "react-redux"


function LoginModal({onClose}){

    const dispatch = useDispatch()
    const {isLoggedIn} =  useSelector((state)=> state.user )

    // to automatically close modal, once loged in
    useEffect(()=>{
        if(isLoggedIn){
            onClose()
        }
    }, [isLoggedIn, onClose])

    const [userName, setUserName] = useState('')
    const [userPass, setUserPass] = useState('')


    function handleUserName(e){
        setUserName( e.target.value )   
    }

    function handleUserPass(e){
        setUserPass( e.target.value )   
    }

    function handleLogin(e) {
        e.preventDefault()

        if(!userName || !userPass){
            alert('enter user name and password...')
            return
        }

        dispatch(setName(userName))
        dispatch(setPassword(userPass))
        dispatch(login())

        // send a logged in alert
        alert(`${userName} logged In...`)
    }

    return(
        <div className=" fixed flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-[rgba(37,99,235,0.6)] z-50   "  >
            <div className=" flex flex-col flex-wrap max-w-[90vw] lg:w-[35vw] md:w-[50vw] bg-white text-black text-[1rem] font-semibold shadow-2xl  rounded-2xl pb-4   " >

                <h1 className=" w-full p-2 font-bold bg-blue-500 text-white rounded-tl-2xl rounded-tr-2xl  " >Login</h1>

                {/* username input */}
                <div className=" flex gap-2 justify-between items-center p-2 w-full mt-4 " >
                    <label htmlFor="userName">Enter User Name:</label>
                    <input autoFocus type="text" id='userName' placeholder="Your username" className=" border-2 border-solid border-blue-800 rounded-[5px] p-2 " onChange={handleUserName}  />
                </div>

                {/* password input */}
                <div className=" flex gap-2 justify-between items-center p-2 w-full " >
                    <label htmlFor="userPassword">Enter User password:</label>
                    <input type="password" id='userPassword' placeholder="Your password" className=" border-2 border-solid border-blue-800 rounded-[5px] p-2 " onChange={handleUserPass} />
                </div>

                {/* login buttons */}
                <button className=" p-2 bg-blue-600 rounded-[10px] text-white font-semibold w-fit m-auto hover:scale-95 hover:bg-blue-800 " onClick={ handleLogin } >Login</button>

            </div>
        </div>
    )
}

export default LoginModal