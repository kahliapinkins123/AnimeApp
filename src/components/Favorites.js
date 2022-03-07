import React from 'react';
import AnimeCard from './AnimeCard';

function Favorites({ favorites, onFavorited, removeFavorite }){
    const favoritesList = favorites.map((anime)=>{
        return <AnimeCard key= {anime.id} anime={anime} onFavorited={onFavorited} removeFavorite={removeFavorite} hasBtn={false}/>
    })

    return( 
        <div id='favorites'>
            <h1>Favorites</h1>
            {favoritesList}
        </div>
    )
}

export default Favorites;