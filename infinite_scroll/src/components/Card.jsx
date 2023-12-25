import React from 'react'
import './card.css'

function Card({data}) {
    console.log(data);
  return (
    <div>
        <h1 className='parent'>{data.map(i => (
            <p className='text'key={i.id}>{i.id} = {i.body}</p>
        ))}</h1>
    </div>
  )
}

export default Card;