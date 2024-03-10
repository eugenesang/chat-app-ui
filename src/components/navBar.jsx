import React from 'react';

import logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <nav className="main-nav">
            <div className="brand-container">
                <div className="icon-container">
                    <img src={logo} alt="Chat App Logo" />
                </div>
                <div className="brand-name">Chat App</div>
                <div className="search-section mb-hidden">
                    <span>
                        <i className="fas fa-search"></i>
                    </span>
                    <input type="text" placeholder="Search chat, contacts or messages" />
                </div>
            </div>

            <div className="options-container">

                <div className="options-container">
                    <span>
                        <i className="fas fa-ellipsis-vertical"></i>
                    </span>
                </div>
                <div className="account-icon">
                    <span>
                        <i className="fa-regular fa-circle-user"></i>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;