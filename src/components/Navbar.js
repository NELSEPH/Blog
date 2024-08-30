import { Link } from 'react-router-dom';
import React from 'react';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>The Dojo Blog</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
                
            </div>
        </nav>
    );
};

export default Navbar;