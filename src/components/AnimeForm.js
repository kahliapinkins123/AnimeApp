import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


function AnimeForm({ addAnime }){
    const history = useHistory();
    const [anime, setAnime] = useState({
        title: '',
        image: '',
        characters: '',
        charImg: '',
        rating: '',
        about: ''
    })

    const isEmpty = Object.values(anime).every(x => (x === null || x === ''));

    console.log(isEmpty)
    
    function handleSubmit(e){
        e.preventDefault();

        

        fetch('http://localhost:3000/animes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...anime, rating: parseFloat(anime.rating)})
        })
            .then((r)=>r.json())
            .then((newAnime)=> {
                addAnime(newAnime);
                history.push('/');
            })
    }

    return(
    <form id='anime-form' onSubmit={handleSubmit}>
        <h3>Submit a New Anime!</h3>
        <input className='form-input' type='text' placeholder='title' value={anime.title} onChange={(e)=>setAnime({...anime, title:e.target.value})}></input>
        <input className='form-input' type='text' placeholder='image'value={anime.image} onChange={(e)=>setAnime({...anime, image:e.target.value})}></input>
        <div>
        <input className='form-input' type='text' placeholder='characters' value={anime.characters} onChange={(e)=>setAnime({...anime, characters:e.target.value})}></input>
        <input className='form-input' type='text' placeholder='character image' value={anime.charImg} onChange={(e)=>setAnime({...anime, charImg:e.target.value})}></input>
        </div>
        <input className='form-input' type='text' placeholder='rating' value={anime.rating} onChange={(e)=>setAnime({...anime, rating:e.target.value})}></input>
        <input id='form-about' type='text' placeholder='about' value={anime.about} onChange={(e)=>setAnime({...anime, about:e.target.value})}></input>
        <button id='submit-btn'>Submit</button>
    </form>
    )

}

export default AnimeForm;