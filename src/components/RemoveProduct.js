
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
// import { addProduct } from '../actions/productActions';

import {
    addProduct,
    updateProduct,
    deleteProduct
    
  } from "../services/index";

  class RemoveProduct extends Component {
    constructor() {
        super();
        this.state = {
            // // advid:'',
            // advertisetitle: '',
            // price: '',
            // description: '',
            // advownername: '',
            // catid: '',
            // imageUrl: '',

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
    }
    onChange(e) {
        this.setState({
            // way to keep this code DRY so this one function works on ALL the input fields
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const advProduct = {
               advid:this.state.advid,
            // advertisetitle: this.state.advertisetitle,
            // price: this.state.price,
            // description: this.state.description,
            // advownername: this.state.advownername,
            // catid: this.state.catid,
            // imageUrl: this.state.imageUrl,
        }

        // this.props.deleteProduct(advProduct);
        // console.log(advProduct);
    }

//  onDeleteClick =advid => {
//     this.props.deleteProduct(advid);

//   };

  render(){
      return(
        <div className="row">
        <div className="col-md-3 m-auto">
            <h1 className="display-5 text-center">Delete product</h1>
            <p className="lead text-center">
                Delete your product
            </p>
            <form noValidate onSubmit={this.onSubmit}>
                <input
                    // className={classnames('form-control form-control-lg', {
                    //     'is-invalid': errors.title
                    // })}
                    name="advid"
                    type="number"
                    placeholder="advid"
                    value={this.state.advid}
                    onChange={ this.onChange}

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
    // product: PropTypes.object.isRequired,
    // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    product: state.product,
    // errors: state.errors
});

export default connect(mapStateToProps, { deleteProduct })(withRouter(RemoveProduct));
