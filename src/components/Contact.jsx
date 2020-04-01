import React from 'react';
import './contact.css';

// const avatar = "https://i.ibb.co/QQHt3Sx/avatar-gratuit.png";
// const name = "MarieJoss";
// const online = true;

const Contact = props => {
    return (<div className="Contact">
        <img className="avatar" src={props.avatar} alt={props.name} />
        <div className="name">
            <h4>{props.name}</h4>
            <div className="status">
                <div className={props.online ? 'status-online' : 'status-offline'}></div>
                <div className="status-text">
                    {props.online ? "Online" : 'Offline'}
                </div>
            </div>
        </div>
    </div>
    )
    };



export default Contact;