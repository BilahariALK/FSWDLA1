import './App.css';
//import {Greetings, Greetings1} from './components/Greetings';
import Greetings from './components/Greetings';
import GreetingsProps from './components/GreetingsProps';
import CounterFun from './components/CounterFun';
import CounterClass from './CounterClass';
function App() {
  return (
    <div className="App">
     <h1> Welcome to First React Project </h1>
     <Greetings />
     <GreetingsProps name="Bilahari" />
     <CounterFun />
     <CounterClass />
    </div>
  );
}

export default App;
