import React, { Component } from 'react';
import axios from "axios";


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
                <h1> {this.state.product}</h1>
            </div>
        );
    }
}

export default Logout;
