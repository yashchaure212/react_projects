import React from 'react'

function Posts({posts, loading}) {
    if(loading) {
        return <h2 className='loading'>Loading...</h2>
    }
  return <ul>
    {posts.map((list) => (
        <li key={list.id}>{list.id}. {list.title}</li>
    ))}
  </ul>
}

export default Posts