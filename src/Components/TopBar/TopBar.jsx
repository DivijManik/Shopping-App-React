import React from "react";
import LogoImg from './Images/Logo.png';
import MenuImg from './Images/menu.svg';

function TopBar() {
    return (
        <div className='TopBar'>
            <button className='Menu'><img src={MenuImg} /></button>
            <img className='Logo' src={LogoImg}></img> <p className='CompanyName'>Shopkart</p>
            <input className='SearchBar' placeholder='Search Products'></input>
            <button className='LoginBtn'>Sign In</button>

            <button className='TabBtns'>Explore</button>
            <button className='TabBtns'>Sell</button>
            <button className='TabBtns'>Cart</button>
        </div>
    )
}

export default TopBar