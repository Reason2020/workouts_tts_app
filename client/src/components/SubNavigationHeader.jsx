import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const SubNavigationHeader = ({ route, subheaderText }) => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-row gap-5 items-center'>
        <button onClick={() => navigate(route)}>
            <IoMdArrowRoundBack className='text-blue-600 font-black text-4xl'/>
        </button>
        <h3 className='text-black font-black text-3xl'>{subheaderText}</h3>
    </div>
  )
}

export default SubNavigationHeader