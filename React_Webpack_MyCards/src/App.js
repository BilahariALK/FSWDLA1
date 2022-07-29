import React from 'react';
import ReactDOM from 'react-dom';
import MyCard from '../components/MyCard';
import MyCards from '../components/MyCards';

function App(){
    return (
        <div>
            <h1> Hello from MyCards App!!!</h1>
            <MyCard name="Bilahari" des="Asst. Professor" title="511" />
            <MyCards/>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"));