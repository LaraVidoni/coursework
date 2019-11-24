import React from 'react';
import './header.css';
import logo from '../../image/logo.png';
import unkUser from '../../image/user.png';
import Menu from '../Menu/menu';

function Header() {
    return (
        <div className="header" >
            <div className="block1">
            <div className="logo">
                <img src={logo} alt="" className="easy" />
            </div>

            <div className="search" >
                <input className="searchBar"type='search' placeholder="Enter a recipe name"></input>
            </div >

            <div className="user">
                <img src={unkUser} alt="" className="unkUser"/>
                <a className="loginLink" href="#">Log in</a>
            </div>
            </div>
            <Menu/>
        </div>

    );
}

export default Header;