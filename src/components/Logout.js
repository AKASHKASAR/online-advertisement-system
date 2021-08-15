import React, { Component } from 'react';
import Search from './Search';
import history from './history';
import { Link } from "react-router-dom";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'

import { ImageList } from '@material-ui/core';
import product from './Product';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {


            

            product: [],
            

        };
    }




    componentDidMount() {
        axios
            .get('http://localhost:8084/logout')
            .then(response => response.data)
            .then((data) => {
                this.setState({ product: data })

                console.log(data);
            })
            
            .catch((error) => {
                console.log(error.message)
            })
    }

   



    render() {
    

        return (
            <div>
            
           { this.state.product}

            
          </div>

        );
    }
}

export default Logout;
