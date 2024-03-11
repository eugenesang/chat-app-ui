import React, { useState } from 'react';

import logo from "../assets/logo.svg";
import dp from "../assets/beautiful_girl_dp.jpg";
import AccountDropdown from './accountDroptDown';

const Navbar = () => {

    const [openDropDown, setOpenDropDown] = useState(false);
    
    const toggleDropDown = () => {
        setOpenDropDown(!openDropDown);
    }

    return (
        <nav className="main-nav">
            <div className="brand-container">
                <div className="icon-container">
                    <img src={logo} alt="Chat App Logo" />
                </div>
                <div className="brand-name">Chat App</div>
               
            </div>

            <div className="options-container">
                <div className="account-icon">
                    <img src={dp} alt="user profile" onClick={toggleDropDown}/>
                </div>
            </div>

            {openDropDown && <AccountDropdown close={toggleDropDown} name={"Elizabeth"} email={"empress.lizzo@gmail.com"} profileImage={dp} />}
        </nav>
    );
}

export default Navbar;