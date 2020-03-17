import React from 'react';
import './Count.css'

const Count = (props) => {
    const count = props.count;
    //const total = count.reduce((total, prd) => total + prd.id,0)        
    let total=0;
    for(let i=0; i<count.length; i++){
        const people = count[i];
        total = total + people.income;
    }
    return (
        <div>
            <h1>Player Summary</h1>
            <p>Added Players: {count.length} </p>
            <p>Total Income: {total}</p>
        </div>
    );
};

export default Count;