import React from 'react'

function Buttons({onClickHandler, title, value}) {
  return (
    <button onClick={onClickHandler} value={value} title={title} className='border-slid border-2 px-2 py-1 mx-4 rounded-md'>{title}</button>
  )
}

export default Buttons