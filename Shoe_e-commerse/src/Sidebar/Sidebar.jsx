import React from 'react'
import Category from "./Category"
import Price from "./Price"
import Colors from "./Colors"

function Sidebar({handleChange}) {
  return (
    <>
        <section className=" w-[15rem] my-4 fixed flex flex-col items-center h-full z-50 mt-20 border-r-2 border-grey-400 border-solid">
            
            <Category  handleChange = {handleChange} />
            <Price handleChange = {handleChange} />
            <Colors handleChange = {handleChange} />
        </section>
    </>
  )
}

export default Sidebar