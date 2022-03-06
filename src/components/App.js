import React, { useState, useEffect } from 'react';
import Search from './Search';
import AnimeForm from './AnimeForm';
import NavBar from './NavBar';
import Filter from './Filter';
import Container from './Container';

function App() {
  const [animes, setAnimes] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [input, setInput] = useState('')

  useEffect(()=>{
    fetch('http://localhost:3000/animes')
      .then((r)=>r.json())
      .then((animeObj)=>setAnimes(animeObj))
  }, [])

  function sortedList(){
    if (sortBy === 'Alphabet'){
      return animes.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortBy === 'Rating'){
      return animes.sort((a,b)=>b.rating-a.rating);
    } else{
      return animes;
    }
  }

  function addAnime(newAnime){
    setAnimes([...animes, newAnime])
  }

  const animeList = sortedList().filter((anime)=>{
    return anime.title.toLowerCase().includes(input.toLowerCase())
   })

  return (
    <div className="App">
      <h1>Animes</h1>
      <NavBar/>
      <AnimeForm addAnime={addAnime}/>
      <Search input={input} setInput={setInput}/>
      <Filter animes={animeList} setSortBy={setSortBy} sortBy={sortBy}/>
      <Container animes={animeList} />
    </div>
  );
}

export default App;
