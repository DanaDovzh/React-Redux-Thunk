import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav-page.sass';
const NavPage = () => {
    return (
        <div className='nav-pages'>
            <NavLink to='/users-page' className='nav-link' activeClassName="active">Users</NavLink>
            <NavLink to='/add-user' className='nav-link' activeClassName="active">Add user</NavLink>
            <NavLink to='/tweets-page' className='nav-link' activeClassName="active">Tweets</NavLink>
            <NavLink to='/tweet-user' className='nav-link' activeClassName="active">Add tweet</NavLink>
        </div>
    )
}

export default NavPage;