import React from 'react';

function Filter({ setSortBy, sortBy }){
    
    function handleAlphabet(){
        setSortBy('Alphabet');
    }

    function handleRating(){
        setSortBy('Rating');
    }

    return(
        <div>
            <strong>SORT BY:</strong>
            <label>
                <input
                className='sort-box'
                type="radio"
                value="Alphabetically"
                name="sort"
                checked={sortBy === "Alphabet"}
                onChange={handleAlphabet}
                />
                Alphabet
            </label>
            <label>
                <input
                className='sort-box'
                type="radio"
                value="Rating"
                name="sort"
                checked={sortBy === "Rating"}
                onChange={handleRating}
                />
                Rating
            </label>
        </div>
    )
    

}

export default Filter;