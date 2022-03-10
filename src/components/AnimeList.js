import React from 'react';
import AnimeCard from './AnimeCard';

function AnimeList({ animes, onFavorited, removeFavorite, favorites }){
    const animeList = animes.map((anime)=>{
        const foundFavorite = favorites.find((a)=>{
            return a.id === anime.id;
        })
        return <AnimeCard key={anime.id} anime={anime} onFavorited={onFavorited} removeFavorite={removeFavorite} hasBtn={true} foundFavorite={!!foundFavorite}/>;
    })
    return(
        <div className='card-holder'>{animeList}</div>
    )

}

export default AnimeList;