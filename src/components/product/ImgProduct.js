import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/';

class ImgProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {


            product: [],
            searchProduct: ''

        };
    }

    componentDidMount() {
        this.findAllAdvertise(this.state.currentPage);
    }

    findAllAdvertise(cureentPage) {
        axios
            .get("/user/seller/getAllAdv")
            .then(response => response.data)
            .then((data) => {
                this.setState({ product: data })

                console.log(data);
            })

            .catch((error) => {
                console.log(error.message)
            })
    };


    searchChanged = event => {
        this.setState({ search: event.target.value })
    }

    render() {


        return (
            <div>

                <h1> Search Product By name</h1>
                <input type='text' onChange={this.searchChanged} placeholder="Redmi,Vivo.." value={this.state.search} />

                <div>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {this.state.product.filter(item => item.advertisetitle.includes(this.state.search)).map(item => (

                            <div>
                                <ul>
                                    <div className="  col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
                                        <div className="card p-0  overflow-hidden shadow" style={{ width: " 15rem " }} >
                                            <h5 className="card-header text-dark">{item.advertisetitle}</h5>
                                            <img className="card-img-top " src={item.imageUrl} alt="alt message" width="95px" height="130px" ></img>
                                            <div className="card-body bg-white mb-2" >
                                                <p className="card-text">
                                                    AdvID:{item.advid} <br />
                                                    Price:{item.price}???  <br />
                                                    Description:{item.description} <br />
                                                    OwnerName:{item.advownername}<br />
                                                    Status:{item.status}<br />

                                                </p>
                                                {/* <button className="btn btn-success  " onClick={() => history.push ('/Message')}>Buy</button> */}
                                                <button className="btn btn-success "  > <Link className="text-white" to={'/Message'}>Buy</Link></button>
                                            </div>

                                        </div>

                                    </div>
                                </ul>

                            </div>

                        ))}

                    </Grid>
                </div>
            </div>

        );
    }
}

export default ImgProduct;
