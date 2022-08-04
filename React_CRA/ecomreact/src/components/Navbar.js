import React from 'react';

function Navbar(){
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-sm fixed-top bg-primary">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <a className="navbar-brand mr-auto" href="#">
                        <img src="imgs/logo.png" width="85%" height="65%" /> 
                    </a>
                    <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><a className="nav-link" href="index.html"><span className="fa fa-home fa-lg"></span> Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="aboutus.html"><span className="fa fa-list fa-lg"></span>About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="gallery.html"><span className="fa fa-info fa-lg"></span> Products</a></li>
                    <li className="nav-item"><a className="nav-link" href="contactus.html"><span className="fa fa-address-card fa-lg"></span> Contact Us</a></li>
                 </ul>                
                 
                </div> 
                <span className="navbar-text">
                    <a data-toggle="modal" data-target="#loginModal">
                    <span className="fa fa-sign-in"></span> Login</a>
                </span>
            </div>

        </nav>

        </div>
    );
};

export default Navbar;