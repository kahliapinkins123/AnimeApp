import React, { useState } from "react";
import Info from "./Info";


function AnimeCard({ anime, onFavorited, removeFavorite, hasBtn }){
    const [info, setInfo] = useState(false);
    const [favorited, setFavorited] = useState(false);

    function handleFavorited(){
        if(favorited === false){
            onFavorited(anime);
        } else{
            removeFavorite(anime);
        }
        setFavorited(()=>!favorited);
        
    }

    const moreInfo = info ? <Info anime={anime}/> : null;
    const favoritedText = favorited ? 'Favorited!' : 'Favorite';
    const faveBtn = hasBtn ? <button onClick={handleFavorited}>{favoritedText}</button> : null;


    return(
        <div>
            <h2>{anime.title}</h2>
            <img src={anime.image}/>
            {faveBtn}         
            <button onClick={()=>setInfo(!info)}>More Info...</button>
            <div>{moreInfo}</div>
        </div>
    )

}

export default AnimeCard;