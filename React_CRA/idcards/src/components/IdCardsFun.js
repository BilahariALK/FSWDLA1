import React from 'react';
import data from '../data/Data.json';
import IdCardFun from './IdCardFun';

function IDCardsfun(props) {
    console.log(data);
    return (
        <div>
            <div>
             <h1> IDCards should be displayed here</h1>
                 { 
                 data.data.map( (elem) => {
                    return   <IdCardFun name={elem.name}
                     des={elem.des}
                     age={elem.age} id={elem.id}/>      
                 }                 
                 )
                 }          
        </div>
        </div>
    );
}

export default IDCardsfun;