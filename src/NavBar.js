import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Assuming you have a NavBar.css for styling

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            <NavLink to="/soda" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Soda</NavLink>
            <NavLink to="/chips" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Chips</NavLink>
            <NavLink to="/sardines" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Sardines</NavLink>
        </nav>
    );
}

export default NavBar;
