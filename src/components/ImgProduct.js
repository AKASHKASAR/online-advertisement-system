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

class ImgProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {


            //  advid:'' ,

            //  textMessage:'',

            product: [],
            searchProduct:''

        };
    }




    componentDidMount() {
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
    }

    handleInput = (e) => {
        // this.setState({ searchProduct: e.target.value })
        this.state.product.advertisetitle = e.target.product.advertisetitle.toLowerCase();
        // this.state.filterProduct = this.state.product.filter((e) => {
        //     product.advertisetitle = e.target.value.toLowerCase();
            // return product.advertisetitle.toLowerCase().include(this.state.searchProduct.toLowerCase());
        
    }
    // handleSubmit = (event) => {
    //     filterProduct = this.state.product.filter((product) => {
    //         return product.advertisetitle.toLowerCase().include(this.state.searchProduct.toLowerCase());

    //     })
    //     event.preventDefault();
    //     // history.push("/ProductsLink");
    // }



    render() {
    

        return (
            <div>
            
            

            <h1>Search Advertise</h1>
      {/* <input className="search-box" onInput={filterCards} placeholder="Search..."/> */}
      <input className="search-box" placeholder="Search..." onChange={this.handleInput}/>
        

        <div>
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
             >
           { this.state.product.map((item, index) => (



                <div>

                     {/* <section className="py-4" container> */}
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
                                    {/* <button className="btn btn-success " >Buy</button> */}
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
