import React from 'react'
import "./search.scss"

function Search({query, handleChange}) {
  
  return (
    <div className='search'>
        <form>
            <input type="text" placeholder='Search Anime' value={query} onChange={handleChange}/>
        </form>
    </div>
  )
}

export default Search