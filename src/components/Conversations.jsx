import React, { useState, useRef, useEffect } from 'react';
import moment from "moment"

const MessageCard = ({
    fromMe,
    message,
    sent,
    delivered,
    read
}) => {

    const MessageDeliveryIcon = ({ sent, delivered, read }) => {

        if (!sent) {
            return (
                <span className="msg-delivery sending gray">
                    <i className="fas fa-clock-rotate-left" title='Sending message...'></i>
                </span>
            )
        }
        if (!delivered) {
            return (
                <span className="msg-delivery check gray" title='Message Sent'>
                    <i className="fas fa-check"></i>
                </span>
            )
        }

        if (!read) {
            return (
                <span className="msg-delivery double-check gray" title='Message Sent and Delivered'>
                    <i className="fas fa-check"></i><i className="fas fa-check"></i>
                </span>
            )
        }

        return (
            <span className="msg-delivery double-check blue" title='Message Read'>
                <i className="fas fa-check"></i><i className="fas fa-check"></i>
            </span>
        )
    }

    if (fromMe) {
        return (
            <article className="message-card from-me">
                <p className="content">{message}</p>
                <div className="float">
                    <MessageDeliveryIcon sent={sent} delivered={delivered} read={read} />
                </div>

            </article>
        )
    } else {
        return (
            <article className="message-card">
                <p className="content">{message}</p>
                <div className="float">

                </div>
            </article>
        )
    }
}

const ConversationCard = ({
    img,
    recipient,
    online,
    lastMessage
}) => {

    const [showMenu, setShowMenu] = useState(false);
    const [menuX, setMenuX] = useState(0);
    const [menuY, setMenuY] = useState(0);
    const menuRef = useRef(null);

    const handleContextMenu = (event) => {
        event.preventDefault(); // Prevent default browser right-click menu

        // Get click coordinates for menu positioning
        const { clientX, clientY } = event;

        setShowMenu(true);

        const screenWidth = 320;

        if (clientX > screenWidth) {
            setMenuX(clientX - 80)
        } else {
            setMenuX(clientX)
        }

        const screenHeight = window.innerHeight - 200;

        if(clientY > screenHeight){
            setMenuY(screenHeight)
        }else{
            setMenuY(clientY)
        }
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    // Event listeners for handling clicks outside the menu
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
          setShowMenu(false) // Update scroll position on scroll
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup function to remove event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const handleMenuItemClick = (option) => {
        // Handle click on each menu option (e.g., open message, mark as read, etc.)
        console.log(`Option clicked: ${option}`);
        setShowMenu(false); // Close the menu after handling the click
    };

    const {
        fromMe, message, sent, delivered, read, date
    } = lastMessage;
    return (
        <article className="conversation-card" onContextMenu={handleContextMenu}>
            <div className="img" title={` ${online ? "online" : "offline"}`}>
                <img src={img} alt="" />
                <div className={`online-status ${online ? "online" : "offline"}`} ></div>
            </div>
            <div className="content">
                <div className="recipient">
                    <span className="name">{recipient}</span>
                    <span className='date'>{moment(date).fromNow()}</span>
                </div>
                <MessageCard fromMe={fromMe} message={message} sent={sent} delivered={delivered} read={read} date={date} />

            </div>
            {showMenu && (
                <ul ref={menuRef} className="options-menu" style={{ left: menuX, top: menuY }}>
                    <li onClick={() => handleMenuItemClick('Open Message')}>
                        <i className="fa-regular fa-comment-dots"></i>
                        <span>View</span>
                    </li>
                    <hr />
                    <li onClick={() => handleMenuItemClick('Mark as Read')}>
                        <i className="fas fa-envelope-open-text"></i>
                        <span>Mark as read</span>
                    </li>
                    <hr />
                    <li onClick={() => handleMenuItemClick('Mute')}>
                        <i className="far fa-bell-slash"></i>
                        <span>Mute</span>
                    </li>
                    <hr />
                    <li onClick={() => handleMenuItemClick('Archive')}>
                        <i className="fas fa-box-archive"></i>
                        <span>Archive</span>
                    </li>
                    <hr />
                    <li onClick={() => handleMenuItemClick('Delete')}>
                        <i className="fas fa-trash"></i>
                        <span>Delete</span>
                    </li>
                </ul>
            )}
        </article>
    )
}


const Conversations = ({
    conversations,
}) => {
    return (
        <section id="conversations-entry">
            <header>
                <div className='h-e1'>
                    <span className="page-title">Chats</span>
                    <span className="action">
                        <i className="fas fa-plus"></i>
                    </span>
                </div>
                <div className="search-bar">
                    <label htmlFor="search">
                        <span>
                            <i className="fas fa-magnifying-glass"></i>
                        </span>
                        <input type="search" name="search" id="search" placeholder='Search or add new chat' />
                    </label>
                </div>
            </header>
            <div className="container">
                {
                    conversations.map(({
                        id, recipient, online, lastMessage, img
                    }) => {
                        return (
                            <ConversationCard
                                key={id}
                                recipient={recipient}
                                online={online}
                                lastMessage={lastMessage}
                                img={img}
                            />
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Conversations;