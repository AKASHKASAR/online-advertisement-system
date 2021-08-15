import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import ImgProduct from './ImgProduct';
import Search from './Search';



const Header = () => (
  <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark  ">
      <Link className="navbar-brand" to="/home">
        <img src="./FlyBuy.png" width="120px" height="40px" alt="FlyBuy" />
      </Link>
      <ul className="container-fluid  navbar-nav" >
      
        <li className="nav-item">
          {/* <Link className="nav-link" to="/Search"></Link> */}
        </li>

        <li>
        <button className="btn btn-warning "  > <Link className="text-white text-decoration-none"  to={'/ImgProduct'}>Search Advertisement</Link></button>
        </li>
        
        {/* <ul className="ml-auto "  > */}
         <li className=" nav-tabs outline-white"><Link className="nav-link" to="/Register"  >Sign Up</Link></li>
        {/* </ul> */}
        <li className="nav-item nav-tabs "> <Link className="nav-link" to="/Login"   > LogIn</Link></li>
        
      </ul>

    </nav>

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

          <li className="nav-item">
            <Link className="nav-link" to="/Product" >Mobile</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Product" >Electronics</Link>
          </li>

          <li className="nav-item" >
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
