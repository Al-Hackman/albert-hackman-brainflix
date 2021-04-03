import React from 'react'
import logo from '../../assets/logo/Logo-brainflix.svg';
import search from '../../assets/icons/Icon-search.svg';
import upload from '../../assets/icons/Icon-upload.svg';
import img from '../../assets/images/Mohan-muruge.jpg';
import './header.scss';

function Header() {
    return (
        <div className="navbar">
            <img src={logo} className="navbar__logo" alt="logo" />
            <input type="text" className="navbar__search" placeholder= "Search"/>
            {/* <SearchBar id="search-bar" type="text" placeholder="Search"></SearchBar> */}
            <div className="navbar__wrap">    
                <button className="navbar__upload" >UPLOAD</button>
                <img src={img} className="navbar__image" alt="Image" />
            </div>
        </div>
    )
}

export default Header
