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
    const favoritedText = favorited ? '❤️ FAVE' : '🤍 Favorite';
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