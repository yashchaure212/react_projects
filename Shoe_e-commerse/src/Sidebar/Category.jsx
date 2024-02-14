import React from 'react'
import Input from '../components/Input'

function Category({handleChange}) {
  return (
    <>
    <div className=' mt-3 border-b-2 flex flex-col justify-center w-full p-5'>
      <h2 className='font-medium text-2xl mb-2'>Category</h2>
      
      <Input 
      handleChange={handleChange} 
      value=""
      title="All"
      name="test"
      />
      <Input 
      handleChange={handleChange} 
      value="sneakers"
      title="Sneakers"
      name="test"
      />
      <Input 
      handleChange={handleChange} 
      value="flats"
      title="Flats"
      name="test"
      />
      <Input 
      handleChange={handleChange} 
      value="sandals"
      title="Sandals"
      name="test"
      />
      <Input 
      handleChange={handleChange} 
      value="heels"  
      title="Heels"
      name="test"
      />
    </div>
    </>
  )
}

export default Category