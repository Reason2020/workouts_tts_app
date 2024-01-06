import React, { useState, useEffect } from 'react'
import { IoMdAdd, IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { getAllDrills } from '../api/drills';
import DrillsCard from '../components/DrillsCard';

const AllDrills = () => {
  const [ drills, setDrills ] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDrills = async () => {
      const response = await getAllDrills();
      if (response.success) {
        setDrills(response.data);
      }
    }
    fetchDrills();
  }, [])

  return (
    <div className='px-5 py-5 flex flex-col gap-5'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center gap-5'>
          <button onClick={() => navigate('/')}>
            <IoMdArrowRoundBack className='text-blue-600 font-bold text-4xl'/>
          </button>
          <h3 className='text-black font-black text-3xl '>All Drills</h3>
        </div>
        <button 
          className='flex flex-row gap-3 items-center bg-blue-600 text-white text-base py-3 px-5 font-medium rounded-lg hover:bg-blue-700 hover:scale-110 transition-all'
          onClick={() => navigate('/drills/new')}>
          <IoMdAdd />
          Add New Drill
        </button>
      </div>
      <div className='flex flex-col gap-3'>
        {
          drills ? drills.map((drill, index) => (
            <DrillsCard 
              key={drill.drill_id}
              drillIndex={index} 
              drillId={drill.drill_id}
              drillTitle={drill.drill_title} 
              drillDescription={drill.drill_description}
              drills={drills}
              setDrills={setDrills}
              keywordsCapacity={80}/>
          )) : <h4>No Drills</h4>
        }
      </div>
    </div>
  )
}

export default AllDrills