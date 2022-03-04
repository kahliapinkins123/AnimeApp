import React from 'react';

function AnimeForm(){
    return(
    <form>
        <input type='text' placeholder='title'></input>
        <input type='text' placeholder='image'></input>
        <input type='text' placeholder='characters'></input>
        <input type='text' placeholder='character image'></input>
        <input type='text' placeholder='about'></input>
        <button>Submit</button>
    </form>
    )

}

export default AnimeForm;