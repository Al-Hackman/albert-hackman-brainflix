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
            <div className="navbar__search-wrap">
                <img className="navbar__search-icon" src={search} alt="Search Icon"/>
                <input type="text" className="navbar__search" placeholder="Search"/>
            </div>
            {/* <SearchBar id="search-bar" type="text" placeholder="Search"></SearchBar> */}
            <div className="navbar__wrap">    
                <button className="navbar__upload" ><img className="navbar__upload-icon" src={upload} alt="Upload Icon"/> UPLOAD</button>
                <img src={img} className="navbar__image" alt="Image" />
            </div>
        </div>
    )
}

export default Header
