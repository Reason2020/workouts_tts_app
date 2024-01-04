import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { deleteDrillById } from '../api/drills';

const DrillsCard = ({ drillId, drillTitle, drillDescription, drillIndex, drills, setDrills }) => {
    const navigate = useNavigate();

    const deleteDrill = async (id) => {
        const response = await deleteDrillById(id);

        //for instant delete feel
        const drillsAfterDeleting = drills.slice(0, drillIndex).concat(drills.slice(drillIndex + 1, drillIndex.length));
        setDrills(drillsAfterDeleting)

        //TODO: Add a modal here later
    }

  return (
    <div className='flex flex-col gap-5 px-5 py-5 rounded-sm shadow-md' >
        <div className='flex flex-row items-center justify-between'>
            <h4 className='text-blue-600 text-2xl font-bold'>{drillTitle}</h4>
            <div className='flex flex-row items-center gap-3'>
                <button 
                    className='flex flex-row items-center gap-1 text-blue-600'
                    onClick={(ev) => navigate(`/drills/${drillId}`)}>
                    <MdEdit className='text-blue-600' />
                    Edit
                </button>
                <button 
                    className='flex flex-row items-center gap-1 text-red-700'
                    onClick={(ev) => deleteDrill(drillId)}>
                    <MdDelete className='text-red-700' />
                    Delete
                </button>
            </div>
        </div>
        <p className='text-black font-normal text-base'>{drillDescription}</p>
    </div>
  )
}

export default DrillsCard