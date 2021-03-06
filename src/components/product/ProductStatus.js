import React, { Component } from 'react';
import axios from "axios";

class ProductStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {

            product: []
        };
    }

    componentDidMount() {

        axios.put(`/admin/updateStatus`)
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
                <form noValidate onSubmit={this.onSubmit}>
                    <input
                        name="advid"
                        type="number"
                        placeholder="advid"
                        value={this.state.advid}
                        onChange={this.onChange}
                    />
                    <input
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
