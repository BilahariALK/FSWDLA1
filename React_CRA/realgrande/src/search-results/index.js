import React from 'react';
import {useParams} from 'react-router-dom'

function SearchResults(props) {
    let {county} = useParams();
    console.log(county)
    let filteredHouses = props.houses.filter( (house) => house.county === county );
    console.log(filteredHouses)
    return (        
        <div>
            <h3> Following are the Search Results for the county - {county} </h3>
            <table className='table table-hover'>
                <tbody>
                   { filteredHouses.map( (h) => ( 
                                <tr>
                                    <td> {h.address} </td>
                                    <td> {h.price } </td>
                                </tr>
                            )
                    )
                   }
                </tbody>
            </table>

        </div>
    );
}

export default SearchResults;