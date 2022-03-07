import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


function NavBar({ search, setSearch}){
    function handleClick(){
        setSearch(!search);
    }

    return(
        <div>
            <nav className='nav-bar'>
                <NavLink  to='/'exact>
                    <li><a>Home</a></li>
                </NavLink>
                <HashLink to='/#favorites'>
                    <li><a href='#favorites'>Favorites</a></li>
                </HashLink>
                <NavLink to='/submit'exact>
                    <li><a>Submit</a></li>
                </NavLink>
                    <li id='search-nav' onClick={handleClick}><a>🔍</a></li>
            </nav>
        </div>
    )

}

export default NavBar;