import { useEffect, useState } from 'react'
import './App.css'
import { RiRefreshLine } from "react-icons/ri";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    refresh();
  },[])

const refresh = () => { fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum])
    })}
   const text = (quotes.author)
   console.log(text);

  return (
    <>
    <div className="parent">
      <h1>{quotes.text}</h1>
      <p>( . . . {quotes.author} )</p>
      <button onClick={refresh} ><RiRefreshLine/></button>
    </div>
    </>
  )
}

export default App
