import { useEffect, useState } from 'react'
import './App.css'
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();

      console.log(json);
      setPosts(json);
      setLoading(false);
    }
    fetchPosts();
  },[])

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPage, indexOfLastPost);
 
  return (
    <>
    <h1>My App</h1>
    <Posts loading={loading} posts={currentPost}/>
    <Pagination postPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </>
  )
}

export default App
