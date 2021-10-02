import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav className="menu">
               <NavLink activeStyle={activeStyle}  to="/shop">Shop</NavLink>
               <NavLink activeStyle={activeStyle} to="/review">Order Review</NavLink>
               <NavLink activeStyle={activeStyle} to="/inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;