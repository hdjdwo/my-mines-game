import React from 'react';
import './App.css';
import { BetPanel } from './components/BetPanel/BetPanel';
import { MinesField } from './components/MinesField/MinesField';

function App() {
  return (
    <div className="App">
     <BetPanel />
     <MinesField />
    </div>
  );
}

export default App;
