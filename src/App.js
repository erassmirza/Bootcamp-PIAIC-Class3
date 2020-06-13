import React from 'react';
import './App.css';
import Dinner from './dinner.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dinner dishName="Chicken Biryani" sweetDish="Kheer"/>
        <Dinner dishName="Nihari" sweetDish="Gajar ka halwa"/>
        <Dinner dishName="Chicken Pulao" sweetDish="Rasmalai"/>

      </header>
    </div>
  );
}

export default App;
