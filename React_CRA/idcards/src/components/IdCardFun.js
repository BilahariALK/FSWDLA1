import React from 'react';

function IdCardFun(props) {
    return (
        <div>
            <div class="card bg-info my-4 w-25 float-start mx-4">
                <div class="card-head bg-primary"> {props.name}</div>
                <div class="card-body">
                    <h4 class="card-title">{props.des}</h4>
                    <p class="card-text">{props.age}</p>
                </div>
            </div>
        </div>
    );
}

export default IdCardFun;

