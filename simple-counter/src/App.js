import './App.css';
import React, { useState, useEffect } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import { FaGoogleDrive } from "react-icons/fa";

import Counter from './Counter';

function CounterHeader(props) {

  return (
    <div className="header">
      <div className="header-item"><BsFillCartFill /></div>
      <div className="header-item">{ props.count }</div>
      <div className="header-item">Items</div>
    </div>
  );
}

function RefreshHeader({refresh}) {

  function refreshCounter(){
    refresh();
  }

  return (
    <div className="header2 inner-item">
            <div className="header2-item" onClick={ () => refreshCounter()}><BiRefresh /></div>
            <div className="header2-item"><FaGoogleDrive /></div>
        </div>
  );
}

export default function App() {

  let arr = [
          {
            id: 0,
            count: 0
          },
          {
            id: 1, 
            count: 0
          },
          {
            id: 2, 
            count: 0
          },
          {
            id: 3, 
            count: 0
          }
        ];

  const [count, setCount] = useState(0);
  const [counters, setCounters] = useState(arr);

  function countCountersInc(id){
    setCount(count + 1)
  }

  function countCountersDec(id){
    setCount(count - 1)
  }

  function deleteCounter(id, c){
    if(c > 0){
      setCount(count - 1);
    }
    let arr1 = counters.filter( el => el.id !== id );
    setCounters(arr1);
    console.log(c);
  }

  function refresh(){
    setCounters(arr);
    setCount(0);
  }

  return (
    <div className="App">
      <CounterHeader count={ count }/>
      <RefreshHeader refresh={ refresh }/>
      {
        counters.map(
          (el, i) => {
                return <Counter id={el.id} counter={el.count} key={el.id} deleteCounter={deleteCounter} countCountersInc={countCountersInc} countCountersDec={countCountersDec}/>
                
          }
        )
      }
    </div>
  );
}

