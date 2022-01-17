import React from 'react'
import { useContext, useEffect } from 'react';
import { CounterContext } from './context';
import Counter from './Counter';
import { BiRefresh } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { FaGoogleDrive } from "react-icons/fa";
import './Counters.css';

 function CounterHeader(props) {

   return (
     <div className="header">
       <div className="header-item"><BsFillCartFill /></div>
       <div className="header-item">{ props.count }</div>
       <div className="header-item">Items</div>
     </div>
   );
 }

 function RefreshHeader() {

    const {state, dispatch} = useContext(CounterContext);

   function refreshCounter(){
        dispatch({type: 'refresh'})
   }

   return (
     <div className="header2 inner-item">
          <div className="header2-item" onClick={ refreshCounter }><BiRefresh /></div>
          <div className="header2-item"><FaGoogleDrive /></div>
      </div>
   );
 }

export default function Counters() {

    const {state} = useContext(CounterContext);

    return (
        <div className="counters">
            <CounterHeader count={ state.activeCounters }/>
            <RefreshHeader />

            { state.counters.map(
                    (el, i) => {
                        return <Counter id={el.id} key={i} index={i} count={0}/>
                    }
                )}
        </div>
    )
}

