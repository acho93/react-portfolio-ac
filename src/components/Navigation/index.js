import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation(props) {
    return (
        <nav>
            <NavLink to="/">
                <div>
                    <p>SOMETHING IN LEFT CORNER. MAYBE ICON?</p>
                </div>
            </NavLink>

            <ul className="nav">
                <li className="nav-tab">
                    <NavLink to="/about">
                        <p>ABOUT</p>
                    </NavLink>
                </li>
                <li className="nav-tab">
                    <NavLink to="/portfolio">
                        <p>PORTFOLIO</p>
                    </NavLink>
                </li>
                <li className="nav-tab">
                    <NavLink to="/contact">
                        <p>CONTACT</p>
                    </NavLink>
                </li>
                <li className="nav-tab">
                    <NavLink to="/resume">
                        <p>RESUME</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;