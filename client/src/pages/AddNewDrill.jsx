import React, { useContext, useState } from 'react'
import SubNavigationHeader from '../components/SubNavigationHeader'
import InputField from '../components/InputField'
import { IoMdAdd } from 'react-icons/io';
import { addNewDrill } from '../api/drills';
import { useNavigate } from 'react-router-dom';
import { NotificationContext } from '../contexts/NotificationContext';

const AddNewDrill = () => {
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const { setShowNotification, setMessage, setMessageType } = useContext(NotificationContext);

  const navigate = useNavigate();

  const submitForm = async (ev) => {
    ev.preventDefault();
    const response = await addNewDrill(title, description);
    if (response.success) {
      navigate('/');
      setMessage("Successfully Added Drill!");
      setMessageType("success");
      setShowNotification(true);
    } else {
      setMessage(response.message);
      setMessageType("fail");
      setShowNotification(true);
    }
  }

  const formEssentials = [
    {
      label: "title",
      inputType: "text",
      value: title,
      setValue: setTitle
    },
    {
      label: "description",
      inputType: "text",
      value: description,
      setValue: setDescription
    }
  ]

  return (
    <div>
      <SubNavigationHeader
        route={'/'}
        subheaderText={'Add New Drill'} 
      />
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
              formType={"Drill"}
            />
          ))
        }   
        <button
          className='flex flex-row gap-2 bg-blue-600 py-2 px-4 rounded-md justify-center items-center text-white font-semibold text-base hover:bg-blue-700 hover:scale-110 transition-all'>
          <IoMdAdd />
          Add Drill
        </button>
      </form>
    </div>
  )
}

export default AddNewDrill