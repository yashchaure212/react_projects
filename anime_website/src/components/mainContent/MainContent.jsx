import React from 'react'
import Search from '../search/Search'
import Cards from "../cards/Cards"
import "./mainContent.scss"
import { IoIosMenu } from "react-icons/io";
import Footer from '../footer/Footer';

function MainContent({query, handleChange, cardsData, loading, handleSidebar, showSidebar}) {

  return (
    <div className='mainContent'>
      <div className="mc-search">
          {showSidebar ? " " : <IoIosMenu className='menu-icon' onClick={handleSidebar}/>}
        <Search query={query} handleChange={handleChange} />
        {loading ? <h1>Loading...</h1> : <Cards cardsData={cardsData}/> }
      </div>
      <Footer/>
    </div>
  )
}

export default MainContent