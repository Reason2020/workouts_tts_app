import React, { useEffect, useState } from 'react'
import { getAllExercises } from '../api/exercises';
import { IoMdArrowRoundBack, IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import ExerciseCard from '../components/ExerciseCard';

const AllExercises = () => {
  const [ exercises, setExercises ] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await getAllExercises();
      setExercises(response.data);
    }
    fetchExercises();
  }, [])

  return (
    <div className='px-5 py-5 flex flex-col gap-5'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-10 items-center'>
          <button onClick={() => navigate('/')}><IoMdArrowRoundBack className='text-blue-600 font-bold text-4xl'/></button>
          <h3 className='text-blue-600 font-bold text-3xl'>All Exercises</h3>
        </div>
        <button 
          className='flex flex-row items-center gap-3 bg-blue-600 text-white font-medium text-base py-3 px-5 rounded-lg'
          onClick={() => navigate('/exercises/new')}>
          <IoMdAdd />
          Add New Exercise
        </button>
      </div>
      <div className='flex flex-col gap-3'>
        {
          exercises ? exercises.map((exercise, index) => (
            <ExerciseCard 
              key={exercise.exercise_id}
              exerciseIndex={index}
              exercises={exercises}
              setExercises={setExercises}
              exerciseId={exercise.exercise_id} 
              exerciseTitle={exercise.exercise_title} 
              exerciseDescription={exercise.exercise_description}
              exerciseDuration={exercise.exercise_duration.seconds}
              keywordsCapacity={180}
            />
          )) : <h4 className='text-blue-600 font-semibold text-2xl'>No Exercises</h4>
        }
      </div>
    </div>
  )
}

export default AllExercises