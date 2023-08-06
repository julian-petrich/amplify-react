import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Create a separate CSS file for the navbar if needed

class NavBar extends Component {
    render() {
        return(
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="https://google.com">Home</Link>
                </div>
            </nav>
        )
    };
}

export default NavBar;