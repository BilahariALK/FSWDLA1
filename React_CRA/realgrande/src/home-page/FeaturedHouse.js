//import React from 'react';

// function FeaturedHouse(props) {
//     return (
//         <div>
//             <div className='row'> 
//                 <div className='col-md-12 bg-warning'> <h3> Featured House </h3>  </div>
//            </div>
//            <div className='row'>
//                 <div className='col-md-5'> house image here</div>
//                { /*<div className='col-md-7'> {props.house.description}</div> */}
//            </div>
//         </div>
//     );
// }

// export default FeaturedHouse;

import React from 'react';
import House from './House';

function FeaturedHouse(props) {
    if(props.house) {
        return (
            <div>
            <div className='row'> 
                <div className='col-md-12 bg-warning'> <h3> Featured House </h3>  </div>
           </div>
           <div className='row'>
               <House house={props.house}/>
            </div>
        </div>
        )
    }
    else {
        return (
            <h2> Could not get featured house</h2>
        )
    }
}

export default FeaturedHouse;