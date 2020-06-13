import React from 'react';
import './App.css';
import Dinner from './dinner.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>TODAY's STARTER</h2>
        <Dinner dealNo="01" dishName="CHICKEN BIRYANI" sweetDish="KHEER" coldDrink="1.5l PEPSI/7UP/COKE"/>
        <Dinner dealNo="02" dishName="NIHARI" sweetDish="GAJAR KA HALWA" coldDrink="1.5l PEPSI/7UP/COKE"/>
        <Dinner dealNo="03" dishName="BEAF BIRYANI" sweetDish="RASMALAI" coldDrink="1.5l PEPSI/7UP/COKE"/>

      </header>
    </div>
  );
}

export default App;
