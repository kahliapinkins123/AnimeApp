import React from "react";

function Info({ anime }){
    return (
    <div className="extra-info">
        <h3>Main Characters: </h3>
        <h4><i>{anime.characters}</i></h4>
        <img className='char-img' src={anime.charImg} alt={anime.characters}/>
        <p>{anime.about}</p>
    </div>)
}

export default Info;