import React, { useEffect, useState } from 'react'
import Sidebar from "../src/components/sidebar/Sidebar"
import Header from './components/header/Header'
import MainContent from "../src/components/mainContent/MainContent"
import "./app.css"
import Footer from './components/footer/Footer'

function App() {

  const [animedata, setAnimeData] = useState([]);
  const [mangaData, setMangaData] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const getData = async () => {
    setLoading(true);
    const data = await fetch("https://api.jikan.moe/v4/top/anime");
    const json = await data.json();
    setLoading(false);
    setMangaData(json.data.slice(0, 10));
  }
  const getManga = async () => {
    setLoading(true);
    const data = await fetch("https://api.jikan.moe/v4/top/manga");
    const json = await data.json();
    setLoading(false);
    setAnimeData(json.data.slice(0, 10));
  }
  const getSearchData = async () => {
    setLoading(true);
    const data = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
    const json = await data.json();
    setLoading(false);
    setCardsData(json.data);
  }

  useEffect(() => {
    getData();
    getManga();
  },[])

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchData();
    },600)

    return () => clearTimeout(timer);
  },[query])

  const handleQuery = (e) => {
    setQuery(e.target.value);
  }


  return (
    <div>
      <Header/>
      <div className="a-display">
        {showSidebar ? <Sidebar animeData={animedata} mangaData={mangaData}  setShowSidebar={setShowSidebar}/> : ""}
        <MainContent showSidebar={showSidebar}  handleSidebar={handleSidebar} query={query} handleChange={handleQuery} cardsData={cardsData} loading={loading}/>
        
      </div>
    </div>
  )
}

export default App;