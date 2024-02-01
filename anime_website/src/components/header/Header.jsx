import React from 'react'
import "./header.scss"

function Header() {
  return (
    <div className='header'>
      <div className="h-left">
        <h1 className='h-logo'>Anime <span className='h-logoStrong'>Gallery</span></h1>
      </div>
      <div className="h-right">
        <h3>home</h3>
        <h3>Contact</h3>
        <h3>About Me</h3>
      </div>
    </div>
  )
}

export default Header