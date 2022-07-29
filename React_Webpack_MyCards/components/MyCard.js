import React from 'react';

export default function MyCard(props) {
  return(
     <div className="card text-white bg-primary w-25 my-4" >
      <div className="card-header bg-info"> { props.name}</div>
      <div className="card-body">
        <h4 className="card-title">{props.des}</h4>
        <p className="card-text">{props.title}</p>
      </div>
    </div>
  );
}