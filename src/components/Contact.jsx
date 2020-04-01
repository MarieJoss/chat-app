import React from 'react';
import PropTypes from 'prop-types';
import './contact.css';


const Contact = props => {
    return (<div className="Contact">
        <img className="avatar" src={props.avatar} />
        <div className="name">
            <h4>{props.name}</h4>
            <div className="status">
                <div className={props.online ? 'status-online' : 'status-offline'}></div>
                <div className="status-text">{props.text}</div>
            </div>
        </div>
    </div>
    )
    };



    // return (<div className="Contact">
    //     <img className="avatar" src={props.avatar} />
    //     <div className="name">
    //         <h4>{props.name}</h4>
    //         <div className="status">
    //             <div className="status-online"></div>
    //             <div className="status-text">
    //                 {online ? "Online" : 'Offline'}
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // )


    ConstantSourceNode.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        text:PropTypes.string.isRequired,
        online:PropTypes.bool.isRequired
      };
export default Contact;