import React from 'react'
import Buttons from './components/Buttons'

function Recomended({handleCLick}) {
  return (
    <>
      <div className='ml-[20rem] flex flex-col my-'>
        <h2 className='text-gray-900 font-medium text-2xl m-4'>Recommended</h2>
        <div className="recomemmended-btns ">
          <Buttons onClickHandler={handleCLick} value="" title="All"/>
          <Buttons onClickHandler={handleCLick} value="Nike" title="Nike"/>
          <Buttons onClickHandler={handleCLick} value="Puma" title="Puma"/>
          <Buttons onClickHandler={handleCLick} value="Adidas" title="Adidas"/>
          <Buttons onClickHandler={handleCLick} value="Vans" title="Vans"/>
        </div>
      </div>
    </>
  )
}

export default Recomended