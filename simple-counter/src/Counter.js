import React,{ useState, useContext, useEffect } from 'react'
import { GrAddCircle } from "react-icons/gr";
import { GrSubtractCircle } from "react-icons/gr"; 
import { RiDeleteBin6Line } from "react-icons/ri";
import { CounterContext } from './context';
import './Counter.css';

export default function Counter({id, count, index}) {

    const {state, dispatch} = useContext(CounterContext);
    const [ncount, setNcount] = useState(0);
    const [show, setShow] = useState(true);

    // useEffect(()=> {
    //     console.log('render');
    // }, [state.counters]);

    const incCount = () => {
        if(ncount === 0){
            dispatch({type: 'increment'})
        }
        setNcount(ncount + 1);
    };

    const decCount = () => {
        if(ncount === 1){
            dispatch({type: 'decrement'})
        }
        if(ncount > 0) {setNcount(ncount - 1);}
    };

    const deleteCounter = () => {
        dispatch({type: 'delete', id: id})
    };

    return (
        <div className="counter" key={id}>{index}
             <div className="counter-item"><span>{ ncount>0 ? ncount : count }</span></div>
             <div className="counter-item" onClick={ incCount }><GrAddCircle /></div>
             <div className="counter-item" onClick={ decCount }><GrSubtractCircle /></div>
             <div className="counter-item" onClick={ deleteCounter }><RiDeleteBin6Line/></div>
        </div>
    )
}
