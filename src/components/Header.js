import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link className="navbar-brand" to="/home">
        <img src="Flybuy.png" width="120px" height="40px" alt="Flybuy" />
      </Link>
      <ul className="navbar-nav">

        <li className="nav-item">

          <Link className="nav-link" to="/Search">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Login" >Login</Link>
        </li>

      </ul>

    </nav>

    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary" >
        <Link className="navbar-brand" to="/home">

        </Link>
        <ul className="navbar-nav">

        <li className="nav-item">
          <Link className="nav-link" to="/Category" >Category</Link>
        </li>

        </ul>

      </nav>
    </div>
  </div>
)


export default Header;
