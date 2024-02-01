import React from 'react'

function Pagination({postPerPage, totalPosts, paginate}) {

    const pageNumbers = [];
    for (let i=1; i <= Math.ceil(totalPosts / postPerPage); i++ ){
        pageNumbers.push(i)
    }
  return (
    <ul className='number-page'>
            {pageNumbers.map(num => (
            <a href="!#" onClick={() => paginate(num)}>{num}</a>
        ))}
    </ul>
  )
}

export default Pagination