import React from 'react'
import "./cards.scss"

function Cards({cardsData}) {

  return (
    <div className='cards'>
      {cardsData.map(c => (
        <a className="single-card" href={c.url} key={c.mal_id}>
          <div className="img">
              <img src={c.images.jpg.image_url} alt="" />
          </div>
          <h1>{c.title_english} <span>2016</span></h1>
        </a>
      ))}
    </div>
  )
}

export default Cards