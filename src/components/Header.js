import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import ImgProduct from './product/ImgProduct';

import { Navbar, Nav } from "react-bootstrap";
import '../App.css';


const Header = () => (
  <div>
    <Nav className="navbar navbar-expand-md navbar-dark bg-dark  ">
      <Link className="navbar-brand" to="/home">
        <img src="./FlyBuy.png" width="120px" height="40px" alt="FlyBuy" />
      </Link>
      <ul className="container-fluid  navbar-nav" >

        <li className="nav-item">
        </li>

        <div className="container1">
          <li>
            <button className="btn"  > <Link className="text-white text-decoration-none" to={'/SearchBar'}>Search Advertisement</Link></button>
          </li>
        </div>

        <Nav className="navbar-right nav-tabs">
          <Link to={"/Register"} className="nav-link">Sign Up </Link>
          <Link to={"/Login"} className="nav-link">Login</Link>
          <Link to={"/Logout"} className="nav-link">Logout</Link>
        </Nav>
      </ul>

    </Nav>

    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-warning" >

        <div className="dropdown">
          <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            All Categories
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
            <li><a className="dropdown-item" href="#">Electronics</a></li>
            <div className="dropdown-divider"></div>
            <li><a className="dropdown-item" href="#">Mobile</a></li>
            <div className="dropdown-divider"></div>
            <li><a className="dropdown-item" href="#">Furniture</a></li>
            <div className="dropdown-divider"></div>
            <li><a className="dropdown-item" href="#">Cars</a></li>
            <div className="dropdown-divider"></div>
            <li><a className="dropdown-item" href="#">Bike</a></li>
            <div className="dropdown-divider"></div>
            <li><a className="dropdown-item" href="#">Books</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
)


export default Header;
