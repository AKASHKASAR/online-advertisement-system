import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyForm from './MyForm';
import Home from './Home';
import PageNotFound from './PageNotFound';
// import MaterialUiSample from './MaterialUiSample';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

import Category from './Category';
// import Drawer from './Navbar';
import Search from './search';
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
                            <Route path="/Category"><Category /></Route>

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

