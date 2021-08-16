import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Home';
import PageNotFound from './PageNotFound';
// import MaterialUiSample from './MaterialUiSample';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Logout from './Logout';

import CategoryAdm from './CategoryAdm';

import Search from './Search';
import Register from './auth/Register';
import Product from './Product';
import UpdateProduct from './UpdateProduct';
import RemoveProduct from './RemoveProduct';
import AdminFunction  from'./AdminFunction';
import UserFunction  from'./UserFunction';
import User from'./User';
import ImgProduct from './ImgProduct';
import ProductStatus from './ProductStatus';
import ProductImgHome from './ProductImgHome';
import SearchBar from './SearchBar';
import Message from './Message';



const Routes = () => {
    return (
        <div>
            <Router>
                <div>
                    <Header></Header>
                
                    <div className="container">
                        <Switch>
                            {/* add an exact path to base url  */}
                            <Route exact path="/"> <Home /> </Route>
                            <Route path="/Search"><Search /></Route>
                            <Route path="/login"><Login /></Route>
                            <Route path="/logout"><Logout /></Route>
                            <Route path="/home"><Home /></Route>
                            <Route path="/CategoryAdm"><CategoryAdm /></Route>
                            <Route path="/Register">< Register/></Route>
                            <Route path="/Product">< Product/></Route>
                            <Route path="/UpdateProduct">< UpdateProduct/></Route>
                            <Route path="/RemoveProduct">< RemoveProduct/></Route>
                            <Route path="/AdminFunction">< AdminFunction/></Route>
                            <Route path="/UserFunction">< UserFunction/></Route>
                            <Route path="/User">< User/></Route>
                            <Route path="/ImgProduct">< ImgProduct/></Route>
                            <Route path="/ProductImgHome">< ProductImgHome/></Route>
                            <Route path="/ProductStatus">< ProductStatus/></Route>
                            <Route path="/SearchBar">< SearchBar/></Route>

                            <Route path="/Message">< Message/></Route>
                            


                            {/* <Route path="/mat"><MaterialUiSample /></Route> */}
                            
                            <Route path="/*"><PageNotFound /></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
            {/* <Drawer  /> */}
            {/* <Search /> */}
            <Footer />
        </div>
    );
};
export default Routes;

