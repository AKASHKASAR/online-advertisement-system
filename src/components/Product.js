import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
// import { addProduct } from '../actions/productActions';

import {
    addProduct,
    updateProduct
    
  } from "../services/index";

class Product extends Component {
    constructor() {
        super();
        this.state = {
            advertisetitle: '',
            price: '',
            description: '',
            advownername: '',
            catid: '',
            imageUrl: '',

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // componentDidMount() {
    //     if (this.props.auth.isAuthenticated) {
    //         // if loged in, redirect to home / books:
    //         this.props.history.push('/');
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        this.setState({
            // way to keep this code DRY so this one function works on ALL the input fields
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newProduct = {
            advertisetitle: this.state.advertisetitle,
            price: this.state.price,
            description: this.state.description,
            advownername: this.state.advownername,
            catid: this.state.catid,
            imageUrl: this.state.imageUrl,
        }
         
        this.props.addProduct(newProduct, this.props.history);
    }

    render() {

        // const { errors } = this.state;
        // Same as:
        // const errors = this.state.errors;

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 m-auto">
                            <h1 className="display-6 text-center">Add product</h1>
                            <p className="lead text-center">
                                Add your product
                            </p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <input
                                    // className={classnames('form-control form-control-lg', {
                                    //     'is-invalid': errors.title
                                    // })}
                                    name="advertisetitle"
                                    type="text"
                                    placeholder="title"
                                    value={this.state.advertisetitle}
                                    onChange={this.onChange}
                                />

                                <input
                                    // className={classnames('form-control form-control-lg', {
                                    //     'is-invalid': errors.price
                                    // })}
                                    name="price"
                                    type="text"
                                    placeholder="price"
                                    value={this.state.price}
                                    onChange={this.onChange}
                                />

                                <input
                                    // className={classnames('form-control form-control-lg', {
                                    //     'is-invalid': errors.description
                                    // })}

                                    name="description"
                                    type="text"
                                    placeholder="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                />


                                <input
                                    // className={classnames('form-control form-control-lg', {
                                    //     'is-invalid': errors.ownername
                                    // })}

                                    name="advownername"
                                    type="text"
                                    placeholder="advownername"
                                    value={this.state.advownername}
                                    onChange={this.onChange}
                                />

                                <input
                                    // className={classnames('form-control form-control-lg', {
                                    //     'is-invalid': errors.ownername
                                    // })}

                                    name="catid"
                                    type="text"
                                    placeholder="catid"
                                    value={this.state.catid}
                                    onChange={this.onChange}
                                />



                                <input
                                    // className={classnames('form-control form-control-lg', {
                                    //     'is-invalid': errors.ownername
                                    // })}

                                    name="imageUrl"
                                    type="text"
                                    placeholder="imageUrl"
                                    value={this.state.imageUrl}
                                    onChange={this.onChange}
                                />


                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Product.propTypes = {
    addProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    product: state.product,
    // errors: state.errors
});

export default connect(mapStateToProps, { addProduct })(withRouter(Product));