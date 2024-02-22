import React from 'react';
import {CounterContext} from './CounterContext';
import MainSection from './components/MainSection'; 
console.log(CounterContext)
const Learn = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <CounterContext.Provider value= "Sahil Negi" >
      <MainSection />
      </CounterContext.Provider>

    </div>
  );
}

export default Learn;
