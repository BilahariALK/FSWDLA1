import React from 'react';

function House(props) {
    return (
        <div className='container mx-4'>
            <div className='row'>
                <div className='col-md-12'>
                    {props.house.county}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    {props.house.address}                
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <img className="w-100" src={`imgs/${props.house.photo}`} />
                </div>
                <div className='col-md-5'>
                    <p>${props.house.price} </p>
                    <p>{props.house.description} </p>
                </div>
            </div>
        </div>
    );
}

export default House;