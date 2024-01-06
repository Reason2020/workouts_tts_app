import React, { useContext } from 'react'
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { deleteExerciseById } from '../api/exercises';
import { ModalContext } from '../contexts/ModalContext';
import { NotificationContext } from '../contexts/NotificationContext';

const ExerciseCard = ({ exerciseTitle, exerciseDescription, exerciseDuration, exerciseId, exercises, setExercises, exerciseIndex, keywordsCapacity }) => {
    const navigate = useNavigate();
    const { modalIsVisible, setModalIsVisible, setModalAccept, setModalTitle } = useContext(ModalContext);
    const { setMessage, setMessageType, setShowNotification } = useContext(NotificationContext);

    const deleteExercise = async (id) => {
        const response = await deleteExerciseById(id);
        if (response.success) {
            setMessage("Successfully Deleted Exercise!");
            setMessageType("success");
            setShowNotification("success");

            //for client side instant delete feel
            const exercisesAfterDeleting = exercises.slice(0, exerciseIndex).concat(exercises.slice(exerciseIndex + 1, exercises.length));
            setExercises(exercisesAfterDeleting);
        }
    }

    const toggleModalVisibility = () => {
        setModalIsVisible((modalIsVisible) => {
            const modalIsVisibleCopy = !modalIsVisible;
            if (!modalIsVisibleCopy) {
                setModalAccept(null)
            } else {
                setModalAccept(() => () => deleteExercise(exerciseId))
                setModalTitle("Are you sure you want to delete exercise?");
            }
            return modalIsVisibleCopy;
        })
    }



  return (
    <div className='flex flex-col gap-5 px-5 py-5 rounded-sm shadow-md'>
        <div className='flex flex-row items-center justify-between'>
            <h4 className='text-blue-600 text-2xl font-bold'>{exerciseTitle}</h4>
            <div className='flex flex-row items-center gap-3'>
                <button 
                    className='flex flex-row items-center gap-1 text-blue-600 hover:scale-110 transition-all'
                    onClick={(ev) => navigate(`/exercises/${exerciseId}`)}>
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
        <div className='flex flex-row justify-between items-center'>
            <p className='text-black font-normal text-base'>{(exerciseDescription.length > keywordsCapacity) ? exerciseDescription.slice(0, keywordsCapacity) + '...' : exerciseDescription}</p>
            <p className='text-blue-600 font-semibold text-base'>{exerciseDuration} seconds</p>
        </div>
    </div>
  )
}

export default ExerciseCard