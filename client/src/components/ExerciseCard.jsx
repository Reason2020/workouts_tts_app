import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { deleteExerciseById } from '../api/exercises';

const ExerciseCard = ({ exerciseTitle, exerciseDescription, exerciseDuration, exerciseId, exercises, setExercises, exerciseIndex }) => {
    const navigate = useNavigate();

    const deleteExercise = async (id) => {
        const response = await deleteExerciseById(id);
        console.log("Delete response: ", response);

        //for client side instant delete feel
        const exercisesAfterDeleting = exercises.slice(0, exerciseIndex).concat(exercises.slice(exerciseIndex + 1, exercises.length));
        setExercises(exercisesAfterDeleting);

        //TODO: Add a delete modal here later
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
                    onClick={() => deleteExercise(exerciseId)}>
                    <MdDelete className='text-red-700' />
                    Delete
                </button>
            </div>
        </div>
        <div className='flex flex-row justify-between items-center'>
            <p className='text-black font-normal text-base'>{exerciseDescription}</p>
            <p className='text-blue-600 font-semibold text-base'>{exerciseDuration} seconds</p>
        </div>
    </div>
  )
}

export default ExerciseCard