import React from 'react'
import Input from '../components/Input'

function Colors({handleChange}) {
  return (
    <>
    <div className=' mt-3 border-b-2 flex flex-col justify-center w-full p-5'>
      <h2 className='font-medium text-2xl mb-2'>Colors</h2>

      <Input 
      handleChange={handleChange} 
      value=""
      title="All"
      name="test1"
      />

      <Input 
      handleChange={handleChange} 
      value="black"
      title="Black"
      name="test1"
      />
      <Input 
      handleChange={handleChange} 
      value="blue"
      title="Blue"
      name="test1"
      />
      <Input 
      handleChange={handleChange} 
      value="green"
      title="Green"
      name="test1"
      />
      <Input 
      handleChange={handleChange} 
      value="white"
      title="White"
      name="test1"
      />
    </div>
    </>
  )
}

export default Colors