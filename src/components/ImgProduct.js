import React, { Component } from 'react';

import axios from "axios";


class ImgProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []

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



    render() {

        return (

            
                this.state.product.map((item) => (

                    <div className="card" style={{width:" 18rem"}}>
                        <h5 className="card-header">{item.advertisetitle}</h5>
                        <img className="card-img-top" src={item.imageUrl} alt="alt message"></img>
                        <div className="card-body">
                         <p>Price:{item.price}</p>
                         <p>{item.description}</p>
                        </div>
                    </div>




                ))




        );
    }
}

export default ImgProduct;
