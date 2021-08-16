

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/';




class ProductStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {

            product: []
        };
    }




    componentDidMount() {

        axios.post(`/admin/updateStatus`)
        .then((response) => {
            console.log(response.data.name);
        }).catch((error) => {
            console.log(error.message)
        });
        


    }




    render() {

        return (

            
            <div className="col-md-3 m-auto">
                            <p className="display-5 text-center">Change Product Status</p>
                            <p className="lead text-center">
                            Change Status of user product
                            </p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <input
                                    // className={classnames('form-control form-control-lg', {
                                    //     'is-invalid': errors.title
                                    // })}
                                    name="advid"
                                    type="number"
                                    placeholder="advid"
                                    value={this.state.advid}
                                    onChange={this.onChange}
                                />
                             <input
                                    // className={classnames('form-control form-control-lg', {
                                    //     'is-invalid': errors.title
                                    // })}
                                    name="Status"
                                    type="text"
                                    placeholder="APPROVED/REJECTED"
                                    value={this.state.status}
                                    onChange={this.onChange}
                                />

                             <input type="submit" className="btn btn-info btn-block mt-4" />

            </form>
            </div>
          
            








        );
    }

}


export default ProductStatus;
