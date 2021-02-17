import React from 'react'
import { Component } from 'react'

class Shop extends Component {
    render(){
    return (
        <div className="shop">
            <div className="container">
                <div className="shop-text">
                    <div>
                        <h1> FREE Delivery with PIZZA OF THE DAY only 8.99 USD</h1>
                        <div className="shop-btn">
                             <button type="button" className="btn btn-danger">SHOP NOW</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
    }
};

export default Shop
