import React from 'react';
import './People.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const People = (props) => {
    const {img,id, name, income, email} = props.people;

    return (
        <div className="people">
            <div className="user-photo">
                <img src={img} alt=""/>
            </div>
            <div className="user-details">
                <h3>ID: {id} {name}</h3>
                <p><small>E-mail: {email}</small></p>
                <p><small>Yearly Income: {income}</small></p>
                <button onClick={()=> props.handleAddUser(props.user)} className="connect-btn"><FontAwesomeIcon icon={faUser} /> 
                Connect</button>
            </div>
        </div>
    );
};

export default People;