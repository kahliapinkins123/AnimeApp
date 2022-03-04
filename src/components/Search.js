import React from 'react';

function Search({ input, setInput}){

    function handleChange(e){
        setInput(e.target.value);
    }


    return(
        <input type="text" placeholder="Search..." value={input} onChange={handleChange}></input>
    )
}

export default Search;