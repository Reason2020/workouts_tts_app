import React from 'react'

const InputField = ({ label, inputType, value, setValue, formType }) => {
  return (
    <div className='flex flex-col gap-1 w-full'>
        <label 
            htmlFor={label}
            className='text-blue-600 font-semibold text-xl'>{formType + ' ' + label[0].toUpperCase() + label.slice(1)}</label>
        <input 
            type={inputType}
            value={value}
            onChange={(ev) => setValue(ev.target.value)} 
            className='py-2 px-4 border-blue-600 border-2 rounded-md focus:outline-none placeholder:font-bold placeholder:text-base'/>
    </div>
  )
}

export default InputField