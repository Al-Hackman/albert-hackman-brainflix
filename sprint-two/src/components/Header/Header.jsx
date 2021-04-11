import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/Logo-brainflix.svg';
import search from '../../assets/icons/Icon-search.svg';
import upload from '../../assets/icons/Icon-upload.svg';
import img from '../../assets/images/Mohan-muruge.jpg';
import './header.scss';

function Header() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar__logo"> <img src={logo} className="navbar__logo-img" alt="BrainFlix Logo" /> </Link>
            <div className="navbar__search-wrap">
                <img className="navbar__search-icon" src={search} alt="Search Icon"/>
                <input type="text" className="navbar__search" placeholder="Search"/>
            </div>
            <div className="navbar__wrap">    
                <Link to="/upload" className="navbar__upload" ><img className="navbar__upload-icon" src={upload} alt="Upload Icon"/> UPLOAD</Link>
                <img src={img} className="navbar__image" alt="User-Image" />
            </div>
        </nav>
    )
}

export default Header;
