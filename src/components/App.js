import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './Search';
import AnimeForm from './AnimeForm';
import NavBar from './NavBar';
import Filter from './Filter';
import Container from './Container';

function App() {
  const [animes, setAnimes] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [input, setInput] = useState('');
  const [search, setSearch] = useState(false);
  const [favorites, setFavorites] = useState([]);

  console.log('rerendered')

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

  const showSearchBar = search ? <Search input={input} setInput={setInput}/> : null;

  const animeList = sortedList().filter((anime)=>{
    return anime.title.toLowerCase().includes(input.toLowerCase())
   }) 

  return (
    <div className="App" >
      <img id='top-img' src='https://wallpaperaccess.com/full/6563049.jpg'/>
      <h1>ANIME NOOK</h1>
      <NavBar search={search} setSearch={setSearch}/>
      <Switch>
        <Route exact path='/submit'>
          <AnimeForm addAnime={addAnime}/>
        </Route>
        <Route exact path='/*'>
          {showSearchBar}
          <Filter animes={animeList} setSortBy={setSortBy} sortBy={sortBy}/>
          <Container animes={animeList} favorites={favorites} setFavorites={setFavorites}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
