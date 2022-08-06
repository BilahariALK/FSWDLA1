import './home-page.css';
import Header from './Header';
import { useEffect, useMemo, useState } from 'react';
import FeaturedHouse from './FeaturedHouse';
import HouseFilter from './HouseFilter';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  let [housesData,setHousesData] = useState([]); //to make data available all the time

   useEffect( () => { // get the data on first render
    const fetchData = async () => {
      let response = await fetch('/houses.json') //get data from json
      const data = await response.json();
      console.log(data);
      setHousesData(data); //set it to state
      }
      fetchData();
      console.log(housesData);   
  } ,[]);

  let featuredIndexHouse = useMemo( ()=> {
    let randomIndex = Math.floor(Math.random()*housesData.length);
    console.log('index is'+randomIndex);
    return housesData[randomIndex];
  }
    ,[housesData]);

    
  return (
    <div className="App">
        <div> 
          <BrowserRouter> 
              <Header/>
              <HouseFilter houses={housesData}/>
              <Routes> 
                  <Route path='/' element={ <FeaturedHouse house={featuredIndexHouse} /> } />
                 </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;




// import './home-page.css';
// import Header from './Header';
// import { useEffect, useMemo, useState } from 'react';
// import FeaturedHouse from './FeaturedHouse';
// import HouseFilter from './HouseFilter';

// function App() {
//   let [housesData,setHousesData] = useState([]); //to make data available all the time

//    useEffect( () => { // get the data on first render
//     const fetchData = async () => {
//       let response = await fetch('/houses.json') //get data from json
//       const data = await response.json();
//       console.log(data);
//       setHousesData(data); //set it to state
//       }
//       fetchData();
//       console.log(housesData);   
//   } ,[]);

//   let featuredIndexHouse = useMemo( ()=> {
//     let randomIndex = Math.floor(Math.random()*housesData.length);
//     console.log('index is'+randomIndex);
//     return housesData[randomIndex];
//   }
//     ,[housesData]);

    
//   return (
//     <div className="App">
//         <div> 
//         <Header/>
//         <HouseFilter houses={housesData}/>
//         <FeaturedHouse house={featuredIndexHouse} />
//         </div>
//     </div>
//   );
// }

// export default App;


// import './home-page.css';
// import Header from './Header';
// import { useEffect, useMemo, useState } from 'react';
// import FeaturedHouse from './FeaturedHouse';

// function App() {
//   let [housesData,setHousesData] = useState([]); //to make data available all the time

//    useEffect( () => { // get the data on first render
//     const fetchData = async () => {
//       let response = await fetch('/houses.json') //get data from json
//       const data = await response.json();
//       console.log(data);
//       setHousesData(data); //set it to state
//       }
//       fetchData();
//       console.log(housesData);   
//   } ,[]);

//   let featuredHouse = useMemo( ()=> {
//     let randomIndex = Math.floor(Math.random()*housesData.length);
//     console.log('index is'+randomIndex);
//     return housesData[randomIndex];
//   }
//     ,[housesData]);

//   return (
//     <div className="App">
//         <div> 
//         <Header/>
//         <FeaturedHouse house={featuredHouse}/>
//         </div>
//     </div>
//   );
// }

// export default App;