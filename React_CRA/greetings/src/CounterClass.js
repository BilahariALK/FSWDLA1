import React from 'react';
import { useState } from "react";

export default class CounterClass extends React.Component{

   constructor(){
    super();
    this.state = {count:0}
   }

    onClickHandler = () => {
        //this.setState.count = this.state.count++;
        console.log(this.state.count);
        this.setState({count:++this.state.count});
    }

    render(){
        return (
            <div>
                <br />
                <button onClick={(this.onClickHandler)}>Click to increment</button>
                <br />
                {this.state.count}
            </div>
        )
    }
}