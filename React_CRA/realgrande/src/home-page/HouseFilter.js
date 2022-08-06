// import React from 'react';

// function HouseFilter(props) {
//     // iterate through all House objects , using map
//     // get county name for each and add it to an array
//     // create a Set out of that array - to remove duplicates.

//     let countiesSet = new Set(Array.from(props.houses.map( (house) =>  house.county ) ));
//     let countiesArray = Array.from(countiesSet);
//     console.log(countiesSet);
//     return (
//         <div>
//             <h1>Houses Filter </h1>
//                     <div class="mb-3 w-25">
//                     <label for="county" class="form-label">County</label>
//                     <select class="form-control" name="nm-county" id="county">
//                       <option value="select">select </option>
//                        { 
//                        countiesArray.map( (county) => (
//                        <option key={county} value={county}> 
//                             {county}
//                        </option> 
//                         ))
//                         }
//                     </select>
//                     </div>
//                     </div>
//     )
//                     }
// export default HouseFilter;

import React from 'react';
import {useNavigate} from 'react-router-dom'
function HouseFilter(props) {
let navigate = useNavigate();

    // iterate through all House objects , using map
    // get county name for each and add it to an array
    // create a Set out of that array - to remove duplicates.
    let countiesSet = new Set(Array.from(props.houses.map( (house) =>  house.county ) ));
    let countiesArray = Array.from(countiesSet);
    console.log(countiesSet);

    let handleChange = (e) => {
        navigate(`/searchResults/${e.currentTarget.value}`,true);
    }

    return (
        <div> 
            <h1>Houses Filter </h1>
                    <div className="mb-3 w-25">
                    <label htmlFor="county" class="form-label">County</label>
                    <select onChange={handleChange} className="form-control" name="nm-county" id="county">
                      <option value="select">select </option>
                       { 
                       countiesArray.map( (county) => (
                        <option key={county} value={county}> 
                            {county}
                       </option> 
                        ))
                        }
                    </select> </div> </div>
    );
} export default HouseFilter;