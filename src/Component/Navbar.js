import React from 'react'
import { Component } from 'react'

class Navbar extends Component {
    render(){
    return (
        <nav className="navbar">
            <div className="navbar-text">
                <div className="logo"> 
                <img src="./image/logo.png" alt="logo"/>

                </div>
                <ul className="navbar-ul">
                    <li>
                        <a href="h">Home</a>
                    </li>
                    <li>
                        <a href="Menu.js">Menu</a>
                    </li>
                    <li>
                        <a href="Shop.js">Shop</a>
                    </li>
                    <li>
                        <a href="Clients.js">News</a>
                    </li>
                    <li>
                        <a href="Footer.js">Contacts</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
    }
};

export default Navbar
