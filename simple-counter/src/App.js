import React, { useReducer, useEffect } from 'react'
import { CounterContext, arr } from './context'
import Counters from './Counters'


export default function App() {

  const initialState = {
    count: 0,
    activeCounters: 0,
    counters: arr
  }

  const reducer = (state, action) => {
    
    switch(action.type){

      // case 'increment-count':
      //   console.log('hi', state);
      //   return { ...state, counters: state.activeCounters + 1 }

      // case 'decrement-count':
      //   console.log('hi', state);
      //   let arr = state.counters.map( el => {
      //     if(el.id === action.id){
      //       return el.count = el.count+1;
      //     }
      //   });
      //   console.log(arr);
        // return { ...state, counters: arr }

      case 'increment':
        console.log('hi', state);
        return { ...state, activeCounters: state.activeCounters + 1 }
      
      case 'decrement':
        return { ...state, activeCounters: state.activeCounters - 1 }

      case 'delete':
        let index = state.counters.findIndex(counter => counter.id === action.id);
        console.log(state);
        return { ...state, counters: [...state.counters.slice(0, index), ...state.counters.slice(index+1)] }

      case 'refresh':
        console.log(state);
        return initialState;

      default :
        return state;
    }
  }

  // const filterList = (counters, id) => {
  //   counters.filter( item => {if(item.id === id){
  //     return false;
  //    }});
  // }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{state, dispatch}}>
      <Counters />
    </CounterContext.Provider>
  )
}

