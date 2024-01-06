import React from 'react'

const ExercisesFormInputs = () => {
  return (
    <div className='flex flex-col w-full gap-3'>
        <div className='flex flex-col'>
            <label htmlFor="title">Exercise Title</label>
            <input 
                type="text"
                name='title'
                className='py-2 px-4 border-blue-600 border-2 rounded-md'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="description">Exercise Description</label>
            <input 
                type="text"
                name='description'
                className='py-2 px-4 border-blue-600 border-2 rounded-md' />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="duration">Exercise Duration (in seconds)</label>
            <input 
                type="text"
                name='duration' 
                className='py-2 px-4 border-blue-600 border-2 rounded-md'/>
        </div>
    </div>
  )
}

export default ExercisesFormInputs