import React from 'react';
import moment from "moment"

const MessageCard = ({
    fromMe,
    message,
    sent,
    delivered,
    read
})=>{
    

    const MessageDeliveryIcon = ({sent, delivered, read})=>{
        
        if(!sent){
            return (
                <span className="msg-delivery sending gray">
                    <i className="fas fa-clock-rotate-left" title='Sending message...'></i>
                </span>
            )
        }
        if(!delivered){
            return (
                <span className="msg-delivery check gray" title='Message Sent'>
                    <i className="fas fa-check"></i>
                </span>
            )
        }

        if(!read){
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

    if(fromMe){
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
})=>{

    const {
        fromMe, message, sent, delivered, read, date
    } =  lastMessage;
    console.log(lastMessage);
    return (
        <article className="conversation-card">
            <div className="img" title={` ${online? "online" : "offline"}`}>
                <img src={img} alt="" />
                <div className={`online-status ${online? "online" : "offline"}`} ></div>
            </div>
            <div className="content">
                <div className="recipient">
                    <span className="name">{recipient}</span>
                    <span className='date'>{moment(date).fromNow()}</span>
                </div>
                <MessageCard fromMe={fromMe} message={message} sent={sent} delivered={delivered} read={read} date={date} />
                
            </div>
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
                    })=>{
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