import history from './history';
import { Link } from "react-router-dom";

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

import axios from "axios";
import { useState, useEffect } from 'react';

let ImgProduct = (props) => {
    const [product, setProduct] = useState({
        advertisetitle: '',
        price: '',
        description: '',
        advownername: '',
        catid: '',
        imageUrl: '',
    });
    // const [product, setProduct] = useState({product}); // try this, if the above useState does not work 

    useEffect(
        () => {
            axios.get(`/user/seller/getAllAdv`)
                .then(
                    (response) => {
                        setProduct(response.data);
                        console.log(product.advertisetitle);
                    }
                )
                .catch((error) => {
                    console.log(error.message);
                });
        }, []);

    const handleProduct = (event) => {
        console.log(product.advertisetitle); // for testing, remove afterwards 
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        });
    };

    const submitGetProductByName = (event) => {
        axios.get(`/user/getAdvertise/${product.advertisetitle}`)
            .then(
                (response) => {
                    setProduct(response.data);
                    console.log(product.advertisetitle);
                }
            )
            .catch((error) => {
                console.log(error.message);
            });
        event.preventDefault();
    }

    return (
        <div>
            <p>Product Component</p>
            <div>
                <p>Search Product here - </p>
                <form onSubmit={submitGetProductByName} className="form form-group">
                    <div>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            value={product.advertisetitle}
                            onChange={handleProduct}
                            className="form-control mb-2"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
                </div>


            <div>
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
             >
                 <div>
           { product.map((item, index) => (



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
                        </div>
            </Grid>
            </div>


        </div>
    )
}
export default ImgProduct;