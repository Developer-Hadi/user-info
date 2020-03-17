import React, { useState, PureComponent } from 'react';
import fakeData from '../../fakeData';
import './User.css';
import People from '../People/People'
import Count from '../Count/Count';

const User = () => {
    const first15 = fakeData.slice(0,15);
    const [users, setUsers] = useState(first15);
    const [count, setCount] = useState([]);
    const handleAddUser =(people) =>{
        const newCount = [...count, people];
        setCount(newCount);
    }
    return (
        <div className="user-container">
            <div className="user-area">        
                {
                    users.map(user => <People handleAddUser={handleAddUser} people={user}></People>)
                }            
            </div>
            <div className="user-count-area">
                <Count count={count}></Count>
            </div>
        </div>
    );
};

export default User;