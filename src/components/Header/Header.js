import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1><img src={logo} alt="Logo"/> Player's Information</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/users">Users</a>
                <a href="/salary">Salary</a>
            </nav>
        </div>
    );
};

export default Header;