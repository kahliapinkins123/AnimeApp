import React from 'react';

function Search({ input, setInput}){

    function handleChange(e){
        setInput(e.target.value);
    }

    return(
        <div className='centered-div'>
            <input className="search" type="text" placeholder="Search..." value={input} onChange={handleChange}></input>
        </div>
    )
}

export default Search;