import React from "react";
import { useState } from "react";

export default function CounterFun(){
    //let i= 0;

    let [count,setCount] = useState(0);
    
    let onClickHandler = () => {
        // i++;
        // console.log(i);
        count++;
        setCount(count);
    }
    return(
        <div>
            <br />
            <button onClick={(onClickHandler)}>Click to increment</button>
            <br />
          
            {count}
        </div>
    )
}