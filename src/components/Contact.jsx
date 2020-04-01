import React from 'react';
import './contact.css';

const avatar = "https://i.ibb.co/QQHt3Sx/avatar-gratuit.png";
const name = "MarieJoss";
const online = true;

const Contact =() => {
    return (<div className="Contact">
        <img className="avatar" src={avatar} />
        <div className="name">
            <h4>{name}</h4>
            <div className="status">
                <div className="status-online"></div>
                <div className="status-text">
                    {online ? "Online" : 'Offline'}
                </div>
            </div>
        </div>
    </div>
    )
    };



export default Contact;