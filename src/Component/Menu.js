import React , { Component } from 'react'

import Prices from './Prices';


class Menu extends Component {
    constructor(prices){
        super(prices)
        this.state = {
            prices:Prices
        }
        this.clickEvent = this.clickEvent.bind(this)
    }
    clickEvent(){
        return <Prices/>
    }

    render(){
    return (
        <div className="about">
        <div className="container">
            <div className="row">
            <div className="col-6">
                    <div className="about-img">
                        <img src="./image/pizza2.jpg" alt="pizza" />

                    </div>

                </div>
                
                <div className="col-6 p-25">
                    <h3>THE PIZZA MENU</h3>
                    <h1>CHICAGO THIN CRUST </h1>
                    <p>Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia.
                            Fugiat velit proident aliquip nisi incididunt nostrud exercitation.</p>
                    <div className="about-btn">
                        <button type="button" className="btn btn-danger" onClick={this.clickEvent} href="Menu.js">VIEW MORE</button>
                        </div>
                </div>
                
            </div>
        </div>
        
    </div>
    );
    }
};

export default Menu
