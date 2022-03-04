import React, { useState } from 'react';
import Favorites from './Favorites';
import AnimeList from './AnimeList';


function Container({ animes }){
    const [favorites, setFavorites] = useState([]);

    function onFavorited(favoritedAnime){
        const favoritesList = [...favorites, favoritedAnime];
        setFavorites(favoritesList);
    }

    function removeFavorite(unfavoritedAnime){
        const updatedList = favorites.filter((anime)=>{
            return anime.id != unfavoritedAnime.id;
        })
        setFavorites(updatedList)
    }


    return (
        <div>
            <AnimeList animes={animes} onFavorited={onFavorited} removeFavorite={removeFavorite} />
            <Favorites favorites={favorites} onFavorited={onFavorited} removeFavorite={removeFavorite}/>
        </div>
       
    )
}

export default Container;