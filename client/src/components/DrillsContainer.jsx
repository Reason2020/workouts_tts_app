import React, { useState, useEffect } from 'react'
import { getAllDrills } from '../api/drills';
import DrillsCard from './DrillsCard';
import { useNavigate, Link } from 'react-router-dom'

const DrillsContainer = () => {
    const [ drills, setDrills ] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchDrills = async () => {
            const response = await getAllDrills();
            setDrills(response.data);
        }
        fetchDrills();
    }, [])

  return (
    <div className='flex flex-col justify-center gap-5 px-5 py-2'>
        <div className='flex flex-row justify-between items-end'>
            <h3 className='text-black font-black text-3xl'>My Drills</h3>
            <Link to={'/drills'} className='text-blue-600 font-light'>VIEW ALL DRILLS</Link>
        </div>
        {
            drills ? (drills.length > 3 ? drills.slice(0, 3).map((drill) => (
                <DrillsCard 
                    key={drill.drill_id} 
                    drillTitle={drill.drill_title} 
                    drillDescription={drill.drill_description} />
            )) : drills.map((drill) => (
                <DrillsCard 
                    key={drill.drill_id} 
                    drillTitle={drill.drill_title} 
                    drillDescription={drill.drill_description} />
            ))) : null
        }
        <button 
            className='bg-blue-600 py-3 rounded-md text-white font-normal text-xl'
            onClick={(ev) => navigate('/drills/new')}>
            Add New Drill
        </button>
    </div>
  )
}

export default DrillsContainer