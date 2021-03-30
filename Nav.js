import React from "react";
import {Link} from "react-router-dom";
import "./App.css";

const Nav = () => {
    return(
        <nav>
            <ul className="nav-links">
                <li><Link className="nav-item" to="/">Home</Link></li>
                <li className="nav-logo">sakila profiles</li>
                <li><Link className="nav-item" to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;