import React, { useContext, useEffect, useState } from 'react'
import SubNavigationHeader from '../components/SubNavigationHeader'
import { useNavigate, useParams } from 'react-router-dom'
import { getExerciseById, updateExerciseById } from '../api/exercises';
import InputField from '../components/InputField';
import { MdEdit } from 'react-icons/md';
import { NotificationContext } from '../contexts/NotificationContext';

const ExerciseDetail = () => {
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ duration, setDuration ] = useState("");
  const { setMessage, setMessageType, setShowNotification } = useContext(NotificationContext);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExercise = async () => {
      const response = await getExerciseById(id);
      if (response.success) {
        const exercise = response.data[0];
        setTitle(exercise.exercise_title);
        setDescription(exercise.exercise_description);
        setDuration(exercise.exercise_duration.seconds);
      }
    }
    fetchExercise();
  }, [])

  const submitForm = async (ev) => {
    ev.preventDefault();
    const response = await updateExerciseById(id, title, description, duration);
    if (response.success) {
      navigate('/');
      setMessage("Successfully Edited Exercise!");
      setMessageType("success");
      setShowNotification(true);
    }
  }

  const formEssentials = [
    {
      label: 'title',
      inputType: 'text',
      value: title,
      setValue: setTitle,
    },
    {
      label: 'description',
      inputType: 'text',
      value: description,
      setValue: setDescription,
    },
    {
      label: 'duration',
      inputType: 'text',
      value: duration,
      setValue: setDuration,
    }
  ]

  return (
    <div className='px-5 py-5 flex flex-col gap-5'>
      <SubNavigationHeader 
        route={'/'}
        subheaderText={'Edit Exercise'}
      />
      <form
        onSubmit={submitForm}
        className='flex flex-col justify-center items-center w-1/2 my-0 mx-auto gap-3 py-5 px-5 rounded-md shadow-xl'>
        {
          formEssentials.map((item, index) => (
            <InputField 
              key={index}
              inputType={item.inputType}
              label={item.label}
              value={item.value}
              setValue={item.setValue}
              formType={'Exercise'}
            />
          ))
        }
        <button className='flex flex-row gap-2 bg-blue-600 py-2 px-4 rounded-md justify-center items-center text-white font-semibold text-base hover:bg-blue-700 hover:scale-110 transition-all'>
          <MdEdit />
          Update Exercise
        </button>
      </form>
    </div>
  )
}

export default ExerciseDetail