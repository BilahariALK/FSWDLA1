import React, { useEffect, useState } from 'react';

function StateCheck() {
    /*
    //let counter = 0;
    let [counter, setCounter] = useState(1);

    useEffect( () =>{
        console.log("In Useeffect");
    })

    useEffect( () => {
        if(counter%2 ===0)
            document.getElementById("changesColor").style.color = 'red';
        else
            document.getElementById("changesColor").style.color = 'blue';
    }, [counter]);

    let clickHandler = () => {
        counter++;
        setCounter(counter);
        // if(counter%2===0)
        //     document.getElementById("changesColor").style.color = 'red';
        // else
        //     document.getElementById("changesColor").style.color = 'blue';
    }

    return (
        <div>
            <button onClick={clickHandler}>Click to Increment </button>
            <p> Incremented value is : {counter}</p>

            <h2 id="changesColor"> The color should change</h2>
        </div>
    );*/

    let  [counter,setCounter] = useState(0);
    let  [anothercounter,setAnothercounter] = useState(100);

    useEffect( () => {
        console.log("In Useeffect");
    }  );


    let clickHandler = () => {
        counter++;
        setCounter(counter);
        if(counter%2 == 0) { 
            document.getElementById('changesColor').style.color = "red";
        }
    }


    let clickAnotherHandler = () => {
        anothercounter--;
        setAnothercounter(anothercounter);
        if(anothercounter%3 == 0) { 
            document.getElementById('changesColor').style.color = "blue";
        }
    }

    return (
        <div>
            <button onClick={clickHandler}> Click to Increment </button>
            <p> INcremented value is - {counter}</p>

            <button onClick={clickAnotherHandler}> Click to Decrement </button>
            <p> Decremented value is - {anothercounter}</p>

            <h2 id="changesColor"> The color should change</h2>
        </div>
    )
}

export default StateCheck;