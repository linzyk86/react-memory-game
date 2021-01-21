import './App.css';
import Card from './components/Card';
import Timer from './components/Timer';
import Header from './components/Header';


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
      <Header />
      <Timer />
     <Card cards = {cards}/>
    </div>
  );
}

export default App;
