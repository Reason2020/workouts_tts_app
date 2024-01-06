import React from 'react'
import ExercisesContainer from '../components/ExercisesContainer'
import DrillsContainer from '../components/DrillsContainer'

const Home = () => {

  return (
    <div className='flex flex-row justify-around items-start'>
        <div className='w-1/2'>
            <ExercisesContainer />
        </div>
        <div className='w-1/2'>
            <DrillsContainer />
        </div>
    </div>
  )
}

export default Home