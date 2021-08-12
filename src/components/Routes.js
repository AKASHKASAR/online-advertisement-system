import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Home';
import PageNotFound from './PageNotFound';
// import MaterialUiSample from './MaterialUiSample';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

import CategoryAdm from './CategoryAdm';

import Search from './search';
import Register from './auth/Register';
import Product from './Product';
import AdminFunction  from'./AdminFunction';
import UserFunction  from'./UserFunction';
import User from'./User';
import ImgProduct from './ImgProduct';


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
                            <Route path="/search"><Search /></Route>
                            <Route path="/login"><Login /></Route>
                            <Route path="/home"><Home /></Route>
                            <Route path="/CategoryAdm"><CategoryAdm /></Route>
                            <Route path="/Register">< Register/></Route>
                            <Route path="/Product">< Product/></Route>
                            <Route path="/AdminFunction">< AdminFunction/></Route>
                            <Route path="/UserFunction">< UserFunction/></Route>
                            <Route path="/User">< User/></Route>
                            <Route path="/ImgProduct">< ImgProduct/></Route>
                           


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

