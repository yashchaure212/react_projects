import React, { useEffect, useState } from 'react'
import Card from './components/card';
import Loading from './components/Loading';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); 
  const [loading, setLoading ] = useState(true);

  const fetchData = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
    const json = await data.json();
    setData((prev) => [...prev, ...json] )
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  },[page]);

  const handleInfiniteScroll = async () => {
    try{
      if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) 
      {
        setLoading(true);
        setPage((prev) => prev + 1 );
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll)
    }
  },[])


  return (
    <div>
      <Card data={data}/>
      {loading && <Loading/>}
    </div>
  )
}

export default App