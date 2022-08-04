import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Home(props) {
    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    <img src ="imgs/home.jpg" width="100%" height="40%"/>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;