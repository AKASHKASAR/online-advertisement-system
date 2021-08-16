import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {
    addProduct,
    updateProduct 
  } from "../../services/index";

class UpdateProduct extends Component {
    constructor() {
        super();
        this.state = {
            advid:'',
            advertisetitle: '',
            price: '',
            description: '',
            advownername: '',
            catid: '',
            imageUrl: ''

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const advProduct = {
            advid:this.state.advid,
            advertisetitle: this.state.advertisetitle,
            price: this.state.price,
            description: this.state.description,
            advownername: this.state.advownername,
            catid: this.state.catid,
            imageUrl: this.state.imageUrl
        }

        this.props.updateProduct(advProduct, this.props.history);
        console.log(advProduct);
    }

    render() {

       

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 m-auto">
                            <h1 className="display-5 text-center">UpdateProduct</h1>
                            <form noValidate onSubmit={this.onSubmit}>

                            <input
                                    name="advid"
                                    type="number"
                                    id="advid"
                                    placeholder="advid"
                                    value={this.state.advid}
                                    onChange={this.onChange}
                                />
                                <input
                                    name="advertisetitle"
                                    type="text"
                                    placeholder="title"
                                    value={this.state.advertisetitle}
                                    onChange={this.onChange}
                                />

                                <input
                                    name="price"
                                    type="text"
                                    placeholder="price"
                                    value={this.state.price}
                                    onChange={this.onChange}
                                />

                                <input
                                    name="description"
                                    type="text"
                                    placeholder="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                />


                                <input
                                    name="advownername"
                                    type="text"
                                    placeholder="advownername"
                                    value={this.state.advownername}
                                    onChange={this.onChange}
                                />
                                <input

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

UpdateProduct.propTypes = {
    updateProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    product: state.product,
});

export default connect(mapStateToProps, { updateProduct })(withRouter(UpdateProduct));