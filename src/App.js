import React, {useState} from 'react';
import Parent from './parent';
import CounterContext from './CounterContext';
import './App.css';

function App() {
  let CountState = useState(1)
  return (
    <CounterContext.Provider value={CountState}>
    <div className="App">
     <Parent/>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
