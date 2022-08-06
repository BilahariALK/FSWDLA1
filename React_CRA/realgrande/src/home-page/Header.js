import React from 'react';

function Header(props) {
    return (
        <div>
            <div className="row">
                <div className='col-md-4'> 
                        <img className="logo" src='./logo.png'/> 
                </div>
                <div className='col-md-8 mt-4'>
                       <p className='tagline'> With us, find your dream house! </p> 
                </div>                
            </div>
        </div>
    );
}

export default Header;