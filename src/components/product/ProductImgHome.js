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

class ProductImgHome extends Component {
    constructor(props) {
        super(props);
        this.state = {

            product: []
        };
    }

    componentDidMount() {

        axios
            .get("/user/buyer/getAllApprovedAdv")
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
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {this.state.product.map(item => (


                        <div>
                            <ul>


                                <div className="  col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
                                    <div className="card p-0  overflow-hidden shadow" style={{ width: " 15rem " }} >
                                        <h5 className="card-header text-dark">{item.advertisetitle}</h5>
                                        <img className="card-img-top " src={item.imageUrl} alt="alt message" width="95px" height="130px" ></img>
                                        <div className="card-body bg-white mb-2" >
                                            <p className="card-text">
                                                AdvID:{item.advid} <br />
                                                Price:{item.price}₹  <br />
                                                Description:{item.description} <br />
                                                OwnerName:{item.advownername}

                                            </p>
                                            <button className="btn btn-success "  > <Link className="text-white" to={'/Message'}>Buy</Link></button>
                                        </div>

                                    </div>

                                </div>
                            </ul>

                        </div>

                    ))}

                </Grid>
            </div>

        );
    }

}

export default ProductImgHome;
