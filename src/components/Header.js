import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";

const Header = () => (// header
  <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link className="navbar-brand" to="/home">
        <img src="Flybuy.png"width="120px" height="40px" alt="Flybuy" />
      </Link>
      <ul className="navbar-nav">
            
        <li className="nav-item">
          <Link className="nav-link" to="/Search" >Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Login" >Login</Link>
        </li>
       
      </ul>
    </nav>
  </div>
)
export default Header;
