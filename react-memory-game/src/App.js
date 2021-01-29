import './App.css';
import React from 'react'
import Card from './components/Card';

let cards = ["far fa-gem", "far fa-gem",
 	 "far fa-heart", "far fa-heart",
 	  "fas fa-cat", "fas fa-cat",
 	   "fa fa-bolt", "fa fa-bolt", 
 	   "fa fa-cube", "fa fa-cube", 
 	   "fa fa-leaf", "fa fa-leaf", 
 	   "fa fa-bicycle", "fa fa-bicycle", 
 	   "fas fa-mug-hot", "fas fa-mug-hot"]



function App() {
  return (
    <div className="App">

     <Card cards = {cards}/>
    </div>
  );
}

export default App;
