import React from 'react'
import { Component } from 'react';

class About extends Component {
    render(){
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3>About Us</h3>
                        <h1>WELCOME TO MAESTRO PIZZINT </h1>
                        <p>Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia.
                                Fugiat velit proident aliquip nisi incididunt nostrud exercitation.</p>
                        <div className="about-btn">
                            <button type="button" className="btn btn-danger">Read MORE</button>
                            </div>
                    </div>
                    <div className="col-6">
                        <div className="about-img">
                            <img src="./image/pizza.jpg" alt="pizza" />

                        </div>

                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}
};

export default About
