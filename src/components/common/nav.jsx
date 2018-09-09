import React from 'react';
import { NavLink } from "react-router-dom";

class Nav extends React.Component{
    render(){
        return (
            <nav>
                <ul>
                    <li><NavLink to="/">Services</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><a href="mailto:enquiries@stacsolutions.io">Contact Us</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav