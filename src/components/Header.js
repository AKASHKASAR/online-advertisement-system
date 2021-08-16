import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import ImgProduct from './ImgProduct';
import Search from './Search';
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

        <Nav className="navbar-right">        <Link to={"/Register"} className="nav-link">        {/* <FontAwesomeIcon icon={faUserPlus} /> */}           Sign Up        </Link>
          <Link to={"/Login"} className="nav-link">        {/* <FontAwesomeIcon icon={faSignInAlt} /> */}           Login        </Link>
          <Link to={"/Logout"} className="nav-link">        {/* <FontAwesomeIcon icon={faSignInAlt} /> */}           Logout        </Link>
        </Nav>


        {/* <ul className="ml-auto "  > */}
        {/* <li className=" nav-tabs right"><Link className="nav-link" to="/Register"  >Sign Up</Link></li> */}
        {/* </ul> */}
        {/* <li className="nav-item nav-tabs "> <Link className="nav-link" to="/Login"   > Log In</Link></li>
         */}
      </ul>

    </Nav>

    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary" >

        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            All Categories
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Electronics</a></li>
            <div className="dropdown-divider"></div>
            <li><a className="dropdown-item" href="#">Mobile</a></li>
            <div className="dropdown-divider"></div>
            <li><a className="dropdown-item" href="#">Furniture</a></li>
            <div className="dropdown-divider"></div>
            <li><a className="dropdown-item" href="#">Cars</a></li>
            <div className="dropdown-divider"></div>
            <li><a className="dropdown-item" href="#">Books</a></li>
          </ul>
        </div>



        <ul className="navbar-nav">

          <li className="nav-item nav-tabs">
            <Link className="nav-link" to="/Product" >Mobile</Link>
          </li>

          <li className="nav-item nav-tabs">
            <Link className="nav-link" to="/Product" >Electronics</Link>
          </li>

          <li className="nav-item nav-tabs " >
            <Link className="nav-link" to="/Product" >Car</Link>
          </li>


          {/* <li className="nav-item nav-tabs "> <Link className="nav-link" to="/AdminFunction"   > AdminFunction</Link></li>
 <li className="nav-item nav-tabs "> <Link className="nav-link" to="/UserFunction"   > UserFunction</Link></li> */}
        </ul>
      </nav>
    </div>
  </div>
)


export default Header;
