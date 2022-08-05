import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/products' element={<Gallery/>}/>
        </Routes>
     </Router>
     <Footer/>
    </div>
  );
}

export default App;
