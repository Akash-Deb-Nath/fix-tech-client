import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../../Shared/NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;