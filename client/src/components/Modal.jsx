import React, { useContext } from 'react'

const Modal = () => {

  const modalIsVisible = true;

  return (
    <div className={`fixed inset-0 flex items-center justify-center backdrop-blur-md transition-opacity ${modalIsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className='flex flex-col justify-center rounded-md shadow-lg px-5 py-5 bg-white'>
            <p className='text-black font-bold text-xl'>Are you sure you want to delete exercise?</p>
            <div className='flex flex-row justify-end items-center'>
                <button 
                    className='px-5 py-3 text-blue-600 text-base font-normal'>Cancel</button>
                <button 
                    className='px-5 py-3 bg-red-700 text-white text-base font-normal rounded-md'>Yes</button>
            </div>
        </div>
    </div>
  )
}

export default Modal