import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import "./sidebar.scss"

function Sidebar({animeData, mangaData, setShowSidebar}) {

  

  console.log(animeData);
  return (
    <div className='sidebar'>
      <RxCross2 className='btn' onClick={() => setShowSidebar(false)}/>
      <h4 className='s-heading'>Top Anime</h4>
      <ul className='s-list'>
      {animeData.map(anime => (
        <a className="s-list-cont" href={anime.url} key={anime?.title}>
          <li className='s-list-item' >{anime?.title}</li>
        </a>
        
      ))}
      <hr/>
      </ul>


      <h4 className='s-heading'>Top Manga</h4>
      <ul className='s-list'>
      {mangaData.map(manga => (
        <a className="s-list-cont" href={manga.url} key={manga?.title}>
          <li className='s-list-item'>{manga?.title}</li>
        </a>
      ))}
      <hr/>
      </ul>
      <div className="s-about">
        <h5>Madebyyashchaure animeGallery</h5>
        <h6>©️2023 India, Inc All right reserved</h6>
      </div>
    </div>
  )
}

export default Sidebar