import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCat } from '../../actions/catActions';

class CategoryAdm extends Component {
    constructor() {
        super();
        this.state = {
            catid: '',
            catname: '',
            catdescription: '',
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

        const newCat = {
            catid: this.state.catid,
            catname: this.state.catname,
            catdescription: this.state.catdescription,
        }
        this.props.addCat(newCat, this.props.history);
    }

    render() {


        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 m-auto">
                            <h1 className="display-6 text-center">Add category</h1>
                            <p className="lead text-center">
                                Post your category here..
                            </p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <input

                                    name="catid"
                                    type="text"
                                    placeholder="catid"
                                    value={this.state.catid}
                                    onChange={this.onChange}
                                />

                                <input

                                    name="catname"
                                    type="text"
                                    placeholder="catname"
                                    value={this.state.catname}
                                    onChange={this.onChange}
                                />


                                <input

                                    name="catdescription"
                                    type="text"
                                    placeholder="catdescription"
                                    value={this.state.catdescription}
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

CategoryAdm.propTypes = {
    addCat: PropTypes.func.isRequired,
    cat: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
    cat: state.cat,

});

export default connect(mapStateToProps, { addCat })(withRouter(CategoryAdm));