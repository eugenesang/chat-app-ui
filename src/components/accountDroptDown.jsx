import React from 'react';

const AccountDropdown = ({
    email,
    name,
    profileImage,
    close,
}) => {
    return (
        <section id="account-drop-down">
            <div className="acc-container">
                <div className="header">
                    <div className="left">
                        <span>{email}</span>
                    </div>
                    <div className="right">
                        <button onClick={close}>
                            <i className="fas fa-xmark"></i>
                        </button>
                    </div>
                </div>
                <div className="content">
                    <div className="top">
                        <img src={profileImage} alt={`${name}`} />
                    </div>
                    <div className="greetings">
                        <span>Hi, {name}!</span>
                    </div>
                    <div className="action-btn">
                        <button>Manage your Account</button>
                    </div>
                </div>
                <div className="actions-container">

                    <button className='left'>
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </button>
                    <button className='right'>
                        <i className="fas fa-cog"></i>
                        <span>Settings</span>
                    </button>

                </div>
                <div className="foot">
                    <span className='link'>
                        <span>By</span> <a href="https://github.com/eugenesang" target="_blank" rel="noreferrer" >Eugene Sang</a>
                    </span>
                    <span className='dot'>·</span>
                    <span>
                        More like this
                    </span>
                </div>
            </div>
        </section>
    );
}

export default AccountDropdown;