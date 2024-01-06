import React from 'react'
import { FaCheck, FaTimes } from "react-icons/fa";


const Notification = ({ message, messageType }) => {
  return (
    <div className={`py-2 px-4 rounded-md flex flex-row gap-2 items-center ${(messageType === "success") ? 'bg-green-500' : 'bg-red-600'} fixed top-28 right-10`}>
        <p className='text-white font-semibold text-base'>
            { 
                messageType === "success" ? (
                    <FaCheck />
                ) : (
                    <FaTimes />
                )
            }
        </p>
        <p className='text-white font-semibold text-base'>{message}</p>
    </div>
  )
}

export default Notification