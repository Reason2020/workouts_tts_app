import React, { useContext, useEffect, useState } from 'react'
import SubNavigationHeader from '../components/SubNavigationHeader'
import { useNavigate, useParams } from 'react-router-dom';
import { getDrillById, updateDrillById } from '../api/drills';
import InputField from '../components/InputField';
import { MdEdit } from 'react-icons/md';
import { NotificationContext } from '../contexts/NotificationContext';

const DrillDetail = () => {
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const { setMessage, setMessageType, setShowNotification } = useContext(NotificationContext)

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDrill = async () => {
      const response = await getDrillById(id);
      if (response.success) {
        const drill = response.data[0];
        setTitle(drill.drill_title);
        setDescription(drill.drill_description);
      }
    }

    fetchDrill();
  }, []);

  const submitForm = async (ev) => {
    ev.preventDefault();
    const response = await updateDrillById(id, title, description);
    if (response.success) {
      navigate('/');
      setMessage("Successfully Edited Drill!");
      setMessageType("success");
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
    <div className='px-5 py-5 flex flex-col gap-5'>
      <SubNavigationHeader 
        route={'/'}
        subheaderText={'Edit Drill'}
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
              formType={'Drill'}
            />
          ))
        }
        <button
          className='flex flex-row gap-2 bg-blue-600 py-2 px-4 rounded-md justify-center items-center text-white font-semibold text-base hover:bg-blue-700 hover:scale-110 transition-all'>
          <MdEdit />
          Update Drill
        </button>
      </form>
    </div>
  )
}

export default DrillDetail