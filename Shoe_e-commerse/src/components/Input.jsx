import React from 'react'

function Input({handleChange, value, title, name, color}) {
  return (
    <>
      <label className='flex items-center gap-2 my-1 text-[18px]'>
        <input onChange={handleChange} value={value} type="radio" name={name}/>
        <span className='checkmark'></span>{title}
      </label>
    </>
  )
}

export default Input