import React from 'react'
import '../styles/App.css';
const TypesOfFruits  = () => {
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
        <li>Orange</li>
        <li>Papaya</li>
        <li>Lichi</li>
        <li>Guava</li>
      </ul>
        <TypesOfFruits />
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
       <Fruits/>
      
      { /* Change code above this line */ }
    </div>
  )
}


export default App;
