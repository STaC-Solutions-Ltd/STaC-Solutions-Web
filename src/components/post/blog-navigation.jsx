import React from 'react';
import { NavLink } from "react-router-dom";

class BlogNavigation extends React.Component{
    render(){
        return (
            <ul>
                <li>
                    <NavLink to="/blog/graph-architecture-part-1">
                        Analysing Software Architecture Using Graphs - Part 1
                    </NavLink>
                </li>
            </ul>
        )
    }
}

export default BlogNavigation