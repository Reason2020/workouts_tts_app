import React, { useContext, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import InputField from '../components/InputField';
import { addNewExercise } from '../api/exercises';
import { useNavigate } from 'react-router-dom';
import SubNavigationHeader from '../components/SubNavigationHeader';
import { NotificationContext } from '../contexts/NotificationContext';

const AddNewExercise = () => {
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ duration, setDuration ] = useState("");
  const { setMessage, setShowNotification, setMessageType } = useContext(NotificationContext)

  const navigate = useNavigate();

  const submitForm = async (ev) => {
    ev.preventDefault();
    try {
      const response = await addNewExercise(title, description, duration);
      navigate("/");
      setMessage("Successfully Added New Exercise!");
      setMessageType("success");
      setShowNotification(true);
    } catch (err) {
      setMessage(err.response.data.message);
      setMessageType("fail");
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
        subheaderText={'Add New Exercise'} />
      <form
        onSubmit={submitForm} 
        className='flex flex-col justify-center items-center w-1/2 my-0 mx-auto gap-3 py-5 px-5 rounded-md shadow-xl'>
        {
          formEssentials.map((item, index) => (
            <InputField 
              key={index}
              label={item.label}
              inputType={item.inputType}
              value={item.value}
              setValue={item.setValue}
              formType={'Exercise'}
            />
          ))
        }
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