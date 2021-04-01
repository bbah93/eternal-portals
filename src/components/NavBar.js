import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar(props){
    
    return (
    <ul className={'nav-bar'}>
    <li>
        <NavLink  className="nav-bar-link" to="/">Home</NavLink>
    </li>
    <li>
        <NavLink  className="nav-bar-link" to="/gallery">Image Gallery</NavLink>
    </li>
    <li>
        <NavLink className="nav-bar-link" to="/colorpage">Color Page</NavLink>
    </li>
    <li>
        <NavLink className="nav-bar-link" to="/login">Login</NavLink>
    </li>
    <li>
        <NavLink className="nav-bar-link" to="/signup">SignUp</NavLink>
    </li>
    <li>
        <NavLink className="nav-bar-link" to="/profile">Profile</NavLink>
    </li>
    </ul>
        )

}


