import React, { useState } from 'react';

function AnimeForm({ addAnime }){
    const [anime, setAnime] = useState({
        title: '',
        image: '',
        characters: '',
        charImg: '',
        rating: '',
        about: ''
    })

    function handleSubmit(e){
        e.preventDefault();
        console.log(anime)

        fetch('http://localhost:3000/animes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...anime, rating: parseFloat(anime.rating)})
        })
            .then((r)=>r.json())
            .then((newAnime)=> addAnime(newAnime))
    }

    return(
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='title' value={anime.title} onChange={(e)=>setAnime({...anime, title:e.target.value})}></input>
        <input type='text' placeholder='image'value={anime.image} onChange={(e)=>setAnime({...anime, image:e.target.value})}></input>
        <input type='text' placeholder='characters' value={anime.characters} onChange={(e)=>setAnime({...anime, characters:e.target.value})}></input>
        <input type='text' placeholder='character image' value={anime.charImg} onChange={(e)=>setAnime({...anime, charImg:e.target.value})}></input>
        <input type='text' placeholder='rating' value={anime.rating} onChange={(e)=>setAnime({...anime, rating:e.target.value})}></input>
        <input type='text' placeholder='about' value={anime.about} onChange={(e)=>setAnime({...anime, about:e.target.value})}></input>
        <button>Submit</button>
    </form>
    )

}

export default AnimeForm;