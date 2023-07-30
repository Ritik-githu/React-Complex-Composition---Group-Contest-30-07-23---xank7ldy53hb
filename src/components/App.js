import React from 'react'
import '../styles/App.css';
const TypesOfFruit = () => {
  return (
    <div id="typesOfFruits">
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div id="fruits">
      { /* Change code below this line */ }
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
      { /* Change code above this line */ }
    </div>
  );
};
const App = () => {

  return (
    <div id="main">
      <h1>Types of Food:</h1>
      { /* Change code below this line */ }
      <ul>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Choewmin</li>
        <li>Pasta</li>
      </ul>
      { /* Change code above this line */ }
    </div>
  )
}


export default App;
