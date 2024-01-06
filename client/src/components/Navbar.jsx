import React, { useContext } from 'react'
import { CgGym } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-blue-600 px-8 py-5 flex flex-row justify-between items-center sticky top-0 w-full'>
      <Link to={'/'} className='flex flex-row gap-3 items-center'>
        <CgGym className='text-white text-4xl font-bold' />
        <h2 className='text-4xl text-white font-bold'>Workout Assistant</h2>
      </Link>
      <div className='flex flex-row gap-3 items-center'>
        <p className='text-white text-xl font-normal'>Hello, reason007!</p>
        <button className='px-3 py-2 bg-red-600 rounded-md border-none text-white font-normal'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar