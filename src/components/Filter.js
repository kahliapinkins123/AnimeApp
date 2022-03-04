import React, { useState } from 'react';

function Filter({ setSortBy, sortBy }){
    
    function handleAlphabet(){
        setSortBy('Alphabet');
    }

    function handleRating(){
        setSortBy('Rating');
    }

    return(
        <div>
            <strong>Sort:</strong>
            <label>
                <input
                type="radio"
                value="Alphabetically"
                name="sort"
                checked={sortBy === "Alphabet"}
                onChange={handleAlphabet}
                />
                Alphabetically
            </label>
            <label>
                <input
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