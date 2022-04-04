import React from 'react';
import HeaderCustomLink from '../HeaderCustomLink/HeaderCustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Borolox Camera Shop</h2>
            <nav className='headerLink'>
                <HeaderCustomLink to={"/"}>Home</HeaderCustomLink>
                <HeaderCustomLink to={"/review"}>Review</HeaderCustomLink>
                <HeaderCustomLink to={"/blog"}>Blog</HeaderCustomLink>
                <HeaderCustomLink to={"/about"}>About</HeaderCustomLink>
            </nav>
        </div>
    );
};
export default Header;