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
                    <li className="nav-item active"><a className="nav-link" href="/"><span className="fa fa-home fa-lg"></span> Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/aboutus"><span className="fa fa-list fa-lg"></span>About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="/products"><span className="fa fa-info fa-lg"></span> Products</a></li>
                    <li className="nav-item"><a className="nav-link" href="/contactus"><span className="fa fa-address-card fa-lg"></span> Contact Us</a></li>
                 </ul>                
                 
                </div> 
                <span className="navbar-text">
                    <a data-toggle="modal" data-target="#loginModal">
                    <span className="fa fa-sign-in"></span> Login</a>
                </span>
            </div>

        </nav>

        {/* Modal content*/}
          <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Login</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body mx-1">
                <div className="md-form mb-1">
                  <i class="fas fa-envelope prefix grey-text"></i>
                  <input type="email" id="defaultForm-email" className="form-control validate"/>
                  <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
                </div>
        
                <div className="md-form mb-1">
                  <i className="fas fa-lock prefix grey-text"></i>
                  <input type="password" id="defaultForm-pass" className="form-control validate"/>
                  <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your password</label>
                </div>
        
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-default">Login</button>
              </div>
            </div>
          </div>
        </div>

        </div>
    );
};

export default Navbar;