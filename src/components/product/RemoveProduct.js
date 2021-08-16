
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    addProduct,
    updateProduct,
    deleteProduct
} from "../../services/index";

class RemoveProduct extends Component {
    constructor() {
        super();
        this.state = {

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const advProduct = {
            advid: this.state.advid

        }


    }



    render() {
        return (
            <div className="row">
                <div className="col-md-3 m-auto">
                    <h1 className="display-5 text-center">Delete product</h1>
                    <p className="lead text-center">
                        Delete your product
                    </p>
                    <form noValidate onSubmit={this.onSubmit}>
                        <input
                            name="advid"
                            type="number"
                            placeholder="advid"
                            value={this.state.advid}
                            onChange={this.onChange}

                        />
                        <button type="submit" className="btn btn-danger" onClick={() => this.props.deleteProduct(this.state.advid)} > delete Product</button>
                    </form>
                </div>
            </div>

        )
    }

}

RemoveProduct.propTypes = {
    deleteProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    product: state.product,

});

export default connect(mapStateToProps, { deleteProduct })(withRouter(RemoveProduct));
