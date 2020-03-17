import React from 'react';
import './Count.css'

const Count = (props) => {
    const count = props.count;        
    let total=0;
    for(let i=0; i<count.length; i++){
        const people = count[i];
        total = total + people.income;
    }
    let list=" ";
    for(let i=0; i<count.length; i++){
        const player = count[i];
        list = list + player.name ;
    }
    
    return (
        <div className="count-area">
            <h1>Player Summary</h1>
            <p>Added Players: {count.length} </p>
             <p>Player's Total Income: $ {total}</p>
             <p> List:  {list}  <br/> </p>
        </div>
    );
};

export default Count;