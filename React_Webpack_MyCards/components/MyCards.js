import React from 'react';
import data from '../data/data.json';
import MyCard from './MyCard';

export default function MyCards() {

    console.log(data);
    let mydataArray = data.data;

    return(
        <div> 
        { //some sort of iteration and mint out MyCard components    
           mydataArray.map( (item) => {
                return(       
                <MyCard name={item.name} des={item.des} title={item.age} />
                )                
            }
           )        
        }
        </div>

    );
}