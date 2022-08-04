import React from 'react';
import {useParams} from 'react-router-dom';

export function Home() {
    return (
        <div>
            <h1> I am Home Page </h1>
        </div>
    );
}

export function Aboutus() {
    return (
        <div>
            <h1>Welcome to About Us Page </h1>
        </div>
    );
}

export function Contactus() {
    return (
        <div>
            <h1> Contact us Page</h1>
        </div>
    );
}

export function ITHome() {
    return (
        <div>
            <h1> Welcome to IT Home Page</h1>
        </div>
    );
}

export function PageNotFund() {
    return (
        <div>
            <h1> We are Sorry, we couldn't find the page you are looking for </h1>
        </div>
    );
}


export function GetOrder() {

    let {orderId, name} = useParams();
    return (
        <div>
            <h1> Hi {name}, Welcome to Order Page </h1>
            <p>Your order id is : {orderId}</p>
        </div>
    );
}

export function QueryStringCheck() {
    let {order} = useParams();
    return (
        <div>
            <h1> Query String is : {order}</h1>
        </div>
    );
}
/*
export function Home() {
    return (
        <div>
            <h1> </h1>
        </div>
    );
}
*/