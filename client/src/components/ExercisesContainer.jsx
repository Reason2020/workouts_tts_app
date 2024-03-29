import React, { useState, useEffect } from 'react'
import { getAllExercises } from '../api/exercises';
import ExerciseCard from './ExerciseCard';
import { Link, useNavigate} from 'react-router-dom';

const ExercisesContainer = () => {
    const [ exercises, setExercises ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchExercises = async () => {
            const response = await getAllExercises();
            if (response.success) {
                setExercises(response.data);
            } else {
                setErrorMessage(response.message);
            }
        }
        fetchExercises();
    }, [])

  return (
    <div className='flex flex-col justify-center gap-5 px-5 py-2'>
        <div className='flex flex-row justify-between items-end'>
            <h3 className='text-black font-black text-3xl'>My Exercises</h3>
            <Link to={'/exercises'} className='text-blue-600 font-light hover:underline'>VIEW ALL EXERCISES</Link>
        </div>
        {
            exercises ? (exercises.length > 3 ? exercises.slice(0, 3).map((exercise, index) => (
                <ExerciseCard 
                    key={exercise.exercise_id}
                    exerciseIndex={index}
                    exercises={exercises}
                    setExercises={setExercises}
                    exerciseId={exercise.exercise_id} 
                    exerciseTitle={exercise.exercise_title} 
                    exerciseDescription={exercise.exercise_description}
                    exerciseDuration={exercise.exercise_duration.seconds}
                    keywordsCapacity={80}/>
            )) : exercises.map((exercise, index) => (
                <ExerciseCard 
                    key={exercise.exercise_id}
                    exerciseIndex={index}
                    exercises={exercises}
                    setExercises={setExercises} 
                    exerciseId={exercise.exercise_id}
                    exerciseTitle={exercise.exercise_title} 
                    exerciseDescription={exercise.exercise_description}
                    exerciseDuration={exercise.exercise_duration.seconds}
                    keywordsCapacity={80}/>
            ))) : null
        }
        <button 
            className='bg-blue-600 py-3 rounded-md text-white font-normal text-xl hover:scale-y-110 hover:bg-blue-700 hover:transition-all'
            onClick={(ev) => navigate('/exercises/new')}>
            Add New Exercise
        </button>
    </div>
  )
}

export default ExercisesContainer