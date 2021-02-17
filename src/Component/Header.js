import React from 'react';
import { Component } from 'react';
import Navbar from './Navbar';
class Header extends Component {
    render(){
    return (
        <div className="banner">
            <Navbar/>
            <div className="banner-content">
                <div className="container">
                    <div className="banner-text">
                        <h3>Pizza Delivery</h3>
                        <h1>MAESTRO PIZINT</h1>
                        <p>Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia.
                            Fugiat velit proident aliquip nisi incididunt nostrud exercitation. </p>
                    <div className="banner-btn">
                    <button type="button" className="btn btn-danger">Delivery Now</button>


                    </div>
                    </div>

                </div>
            
            </div>
        </div> 
    );
    }
};

export default Header
