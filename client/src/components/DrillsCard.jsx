import React, { useContext } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { deleteDrillById } from '../api/drills';
import { ModalContext } from '../contexts/ModalContext';

const DrillsCard = ({ drillId, drillTitle, drillDescription, drillIndex, drills, setDrills }) => {
    const navigate = useNavigate();

    const { modalIsVisible, setModalIsVisible, setModalAccept, setModalTitle } = useContext(ModalContext);

    const deleteDrill = async (id) => {
        const response = await deleteDrillById(id);
        console.log("Response from delete drill function: ", response);

        //for instant delete feel
        const drillsAfterDeleting = drills.slice(0, drillIndex).concat(drills.slice(drillIndex + 1, drillIndex.length));
        setDrills(drillsAfterDeleting)

        //TODO: Add a modal here later
    }

    const toggleModalVisibility = () => {
        setModalIsVisible((modalIsVisible) => {
            const modalIsVisibleCopy = !modalIsVisible;
            if (!modalIsVisibleCopy) {
                setModalAccept(null)
            } else {
                setModalAccept(() => () => deleteDrill(drillId))
                setModalTitle("Are you sure you want to delete drill?");
            }
            return modalIsVisibleCopy;
        })
    }

  return (
    <div className='flex flex-col gap-5 px-5 py-5 rounded-sm shadow-md' >
        <div className='flex flex-row items-center justify-between'>
            <h4 className='text-blue-600 text-2xl font-bold'>{drillTitle}</h4>
            <div className='flex flex-row items-center gap-3'>
                <button 
                    className='flex flex-row items-center gap-1 text-blue-600 hover:scale-110 transition-all'
                    onClick={(ev) => navigate(`/drills/${drillId}`)}>
                    <MdEdit className='text-blue-600' />
                    Edit
                </button>
                <button 
                    className='flex flex-row items-center gap-1 text-red-700 hover:scale-110 transition-all'
                    onClick={toggleModalVisibility}>
                    <MdDelete className='text-red-700' />
                    Delete
                </button>
            </div>
        </div>
        <p className='text-black font-normal text-base'>{drillDescription.length > 100 ? drillDescription.slice(0, 90) + '...' : drillDescription}</p>
    </div>
  )
}

export default DrillsCard