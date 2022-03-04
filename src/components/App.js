import React, { useState } from 'react';
import Favorites from './Favorites';
import AnimeList from './AnimeList';
import Search from './Search';
import AnimeForm from './AnimeForm';
import NavBar from './NavBar';
import Filter from './Filter';
import Container from './Container';

function App() {
  const testAnimes = [
    {
      "id": 1,
      "title": "Death Note",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ag0T9Ix63qBeMdriZ_8kzPlYm1sYEu6jkQ&usqp=CAU",
      "characters": "Light Yagami, L, Misa Amane, Ryuk",
      "charImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZY5UXBJhd8k9iNrNI51W_ryet1P-swL4B-Q&usqp=CAU"
    },
    {
      "id": 2,
      "title": "HunterxHunter",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJoSCM83cLWmEyfBumw_tkJBSQbdoPBUSJw&usqp=CAU",
      "characters": "Gon Freecs, Killua Zoldyck, Kurapika, Leorio, Hisoka",
      "charImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDzkToXVQMWRVmvJASF0WJ8btyBex7-obnmg&usqp=CAU"
    },
    {
      "id": 3,
      "title": "Attack on Titan",
      "image": "https://m.media-amazon.com/images/M/MV5BMzQwZjZkMTktYzNkNC00ZWFlLWE4NGEtMjA3YTA4OTEyZWVkXkEyXkFqcGdeQXVyMTA5MTI0Mzc1._V1_.jpg",
      "characters": "Eren Jaegar, Mikasa Ackerman, Armin Arlert, Levi, Reiner Braun",
      "charImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxVwVpAt7eP1qA3dinx1pmgm4EsNK_bQgnA&usqp=CAU"
    },
    {
      "id": 4,
      "title": "Demon Slayer",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc66esx0vaUmMrlupotDQJegDD2h-NQCKEwQ&usqp=CAU",
      "characters": "Tanjiro Kamado, Nezuko Kamado, Zenitsu Agatsuma, Kanao Tsuyuri",
      "charImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYfxc9Pf659Geen2XwekTboWSpzcdBk3vFg&usqp=CAU"
    },
  ]

  const [animes, setAnimes] = useState(testAnimes);
  const [sortBy, setSortBy] = useState('');

  function sort(){
    if (sortBy === 'Alphabet'){
      return animes.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortBy === 'Rating'){
      return animes.sort((a,b)=>a-b);
    } else{
      return animes;
    }
  }

  const animeList = sort();

  
  

  return (
    <div className="App">
      <h1>Animes</h1>
      <NavBar/>
      <AnimeForm/>
      <Search/>
      <Filter animes={animeList} setSortBy={setSortBy} sortBy={sortBy}/>
      <Container animes={animeList} />
    </div>
  );
}

export default App;
