import React, { useState, useEffect } from 'react'
import { GrAddCircle } from "react-icons/gr";
import { GrSubtractCircle } from "react-icons/gr"; 
import { RiDeleteBin6Line } from "react-icons/ri";
import './Counter.css';

function Counter({id, counter, deleteCounter, countCountersInc, countCountersDec}) {

    const [count, setCount] = useState(counter);
    
    function incCount(){
        if(count === 0) countCountersInc(id);

        setCount(count + 1);
    }

    function decCount(){
        if(count === 1) countCountersDec(id);
        if(count > 0) setCount(count - 1);
    }

    function deleteC(){
        deleteCounter(id, count);
    }

    return (
        <div className="counter">
            <div className="counter-item"><span>{ count ? count : 'Zero' }</span></div>
            <div className="counter-item" onClick={ () => incCount() }><GrAddCircle /></div>
            <div className="counter-item" onClick={ () => decCount() }><GrSubtractCircle /></div>
            <div className="counter-item" onClick={ () => deleteC() }><RiDeleteBin6Line/></div>
        </div>
    )
}

export default Counter
