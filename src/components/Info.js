import React from "react";

function Info({ anime }){
    return (
    <div>
        <h3>Main Characters: <p>{anime.characters}</p></h3>
        <img src={anime.charImg}/>
        <h4>Blurb (to be added to json)</h4>
    </div>)
}

export default Info;