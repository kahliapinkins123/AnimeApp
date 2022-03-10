import React, { useState } from "react";
import Info from "./Info";


function AnimeCard({ anime, onFavorited, removeFavorite, hasBtn, foundFavorite }){
    const [info, setInfo] = useState(false);

    function handleFavorited(){
        if(foundFavorite === false){
            onFavorited(anime);
        } else{
            removeFavorite(anime);
        }

    }

    const moreInfo = info ? <Info anime={anime}/> : null;
    const favoritedText = foundFavorite ? '❤️ FAVE' : '🤍 Favorite';
    const faveBtn = hasBtn ? <button className='card-btn' onClick={handleFavorited}>{favoritedText}</button> : null;


    return(
        <div className="card centered-div" >
            <h2>{anime.title}</h2>
            <img className='card-img' src={anime.image} alt={anime.title}/>
            <div>
                {faveBtn}       
                <button className='card-btn' onClick={()=>setInfo(!info)}>More Info...</button>
                <div>{moreInfo}</div>
                
            </div>
        </div>
    )

}

export default AnimeCard;