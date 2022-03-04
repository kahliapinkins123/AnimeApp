import React from "react";

function Info({ anime }){
    return (
    <div>
        <h3>Main Characters: </h3>
        <h4><i>{anime.characters}</i></h4>
        <img src={anime.charImg}/>
        <p>{anime.about}</p>
    </div>)
}

export default Info;