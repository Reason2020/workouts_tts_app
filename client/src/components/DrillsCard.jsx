import React from 'react'

const DrillsCard = ({ drillTitle, drillDescription }) => {
  return (
    <div className='flex flex-col gap-5 px-5 py-5 rounded-sm shadow-md' >
        <h4 className='text-blue-600 text-2xl font-bold'>{drillTitle}</h4>
        <p className='text-black font-normal text-base'>{drillDescription}</p>
    </div>
  )
}

export default DrillsCard