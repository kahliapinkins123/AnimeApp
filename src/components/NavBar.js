import React from 'react';
import { NavLink } from 'react-router-dom';

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
                <NavLink to='/favorites'>
                    <li><a>Favorites</a></li>
                </NavLink>
                <NavLink to='/submit'exact>
                    <li><a>Submit</a></li>
                </NavLink>
                    <li id='search-nav' onClick={handleClick}><a>🔍</a></li>
            </nav>
        </div>
    )

}

export default NavBar;