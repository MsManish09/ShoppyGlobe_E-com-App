// import { useState } from "react";


function CartModal({ message, onClose }) {


  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-[#93c5fdb3] text-blue-600">
      <div className="bg-white  p-8 rounded-[10px] shadow-2xl max-w-sm w-full text-center ">
        <h2 className="text-2xl font-semibold  mb-4">{message}</h2>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default CartModal
