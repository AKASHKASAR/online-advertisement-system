import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Home';
import PageNotFound from './PageNotFound';
// import MaterialUiSample from './MaterialUiSample';
import Header from './Header';
import Footer from './Footer';
import Login from './auth/Login';
import Logout from './auth/Logout';

import CategoryAdm from './category/CategoryAdm';


import Register from './auth/Register';
import Product from './product/Product';
import UpdateProduct from './product/UpdateProduct';
import RemoveProduct from './product/RemoveProduct';
import AdminFunction from './auth/AdminFunction';
import UserFunction from './auth/UserFunction';
import User from './auth/User';
import ImgProduct from './product/ImgProduct';
import ProductStatus from './product/ProductStatus';
import ProductImgHome from './product/ProductImgHome';
import SearchBar from './SearchBar';
import Message from './message/Message';

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
                            
                            <Route path="/login"><Login /></Route>
                            <Route path="/logout"><Logout /></Route>
                            <Route path="/home"><Home /></Route>
                            <Route path="/CategoryAdm"><CategoryAdm /></Route>
                            <Route path="/Register">< Register /></Route>
                            <Route path="/Product">< Product /></Route>
                            <Route path="/UpdateProduct">< UpdateProduct /></Route>
                            <Route path="/RemoveProduct">< RemoveProduct /></Route>
                            <Route path="/AdminFunction">< AdminFunction /></Route>
                            <Route path="/UserFunction">< UserFunction /></Route>
                            <Route path="/User">< User /></Route>
                            <Route path="/ImgProduct">< ImgProduct /></Route>
                            <Route path="/ProductImgHome">< ProductImgHome /></Route>
                            <Route path="/ProductStatus">< ProductStatus /></Route>
                            <Route path="/SearchBar">< SearchBar /></Route>
                            <Route path="/Message">< Message /></Route>
                            <Route path="/*"><PageNotFound /></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
            <Footer />
        </div>
    );
};
export default Routes;

