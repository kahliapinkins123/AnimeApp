import React from 'react';
import AnimeCard from './AnimeCard';

function AnimeList({ animes, onFavorited, removeFavorite }){
    const animeList = animes.map((anime)=>{
        return <AnimeCard key={anime.id} anime={anime} onFavorited={onFavorited} removeFavorite={removeFavorite} hasBtn={true}/>
    })
    return(
        <div>{animeList}</div>
    )

}

export default AnimeList;