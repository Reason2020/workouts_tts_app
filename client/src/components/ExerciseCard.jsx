import React from 'react'

const ExerciseCard = ({ exerciseTitle, exerciseDescription, exerciseDuration }) => {
  return (
    <div className='flex flex-col gap-5 px-5 py-5 rounded-sm shadow-md'>
        <h4 className='text-blue-600 text-2xl font-bold '>{exerciseTitle}</h4>
        <div className='flex flex-row justify-between items-center'>
            <p className='text-black font-normal text-base'>{exerciseDescription}</p>
            <p className='text-blue-600 font-semibold text-base'>{exerciseDuration} seconds</p>
        </div>
    </div>
  )
}

export default ExerciseCard