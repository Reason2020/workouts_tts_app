import React, { useState } from 'react'
import { IoMdArrowRoundBack, IoMdAdd } from 'react-icons/io'
import InputField from '../components/InputField';
import { addNewExercise } from '../api/exercises';
import { useNavigate } from 'react-router-dom';

const AddNewExercise = () => {
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ duration, setDuration ] = useState("");

  const navigate = useNavigate();

  const submitForm = async (ev) => {
    ev.preventDefault();
    const response = await addNewExercise(title, description, duration);
    if (response.success) {
      navigate("/");
    }
  }

  return (
    <div>
      <div className='flex flex-row gap-5 items-center'>
        <button onClick={() => navigate('/')}>
          <IoMdArrowRoundBack className='text-blue-600 font-bold text-4xl'/>
        </button>
        <h3 className='text-blue-600 font-bold text-3xl'>Add New Exercise</h3>
      </div>
      <form
        onSubmit={submitForm} 
        className='flex flex-col justify-center items-center w-1/2 my-0 mx-auto gap-3'>
        <InputField 
          label={'title'}
          inputType={'text'}
          value={title}
          setValue={setTitle}
          formType={'Exercise'}
        />
        <InputField 
          label={'description'}
          inputType={'text'}
          value={description}
          setValue={setDescription}
          formType={'Exercise'}
        />
        <InputField 
          label={'duration'}
          inputType={'text'}
          value={duration}
          setValue={setDuration}
          formType={'Exercise'}
        />
        <button 
          className='flex flex-row gap-2 bg-blue-600 py-2 px-4 rounded-md justify-center items-center text-white font-semibold text-base hover:bg-blue-700 hover:scale-110 transition-all' >
          <IoMdAdd />
          Add Exercise
        </button>
      </form>
    </div>
  )
}

export default AddNewExercise