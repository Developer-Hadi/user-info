import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo"/>
            <nav>
                <a href="/home">Home</a>
                <a href="/users">Users</a>
                <a href="/salary">User Salary</a>
            </nav>
        </div>
    );
};

export default Header;