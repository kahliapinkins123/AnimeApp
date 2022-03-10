import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Favorites from './Favorites';
import AnimeList from './AnimeList';


function Container({ animes, favorites, setFavorites }){

    console.log(favorites)
    
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
        <div className="container centered-div">
            <Switch>
                <Route exact path='/'>
                    <AnimeList animes={animes} onFavorited={onFavorited} removeFavorite={removeFavorite} favorites={favorites}/>
                </Route>
                <Route exact path='/favorites'>
                    <Favorites favorites={favorites} onFavorited={onFavorited} removeFavorite={removeFavorite}/>
                </Route>    
            </Switch>
        </div>
       
    )
}

export default Container;