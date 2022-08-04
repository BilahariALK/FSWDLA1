import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Aboutus, Contactus, GetOrder, Home, ITHome, PageNotFund, QueryStringCheck } from './components/Allinone';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Routing Page!</h1>

      {//single line comment 
      }

      {
        /* multi line comment
        */
      }

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path='/it/home' element={<ITHome/>}/>
          <Route path='/order/:orderId/:name' element={<GetOrder/>}/>
          <Route path='/querystr/:order' element={<QueryStringCheck/>}/>
          <Route path='*' element={<PageNotFund/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
