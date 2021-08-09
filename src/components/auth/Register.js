import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            password2: '',
            firstName: '',
            lastName: '',
            address: '',
            contactno: '',
            email: '',



            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            // if loged in, redirect to home / books:
            this.props.history.push('/');
        }
    }

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

        const newUser = {
            name: this.state.username,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            contactno: this.state.contactno,
            email: this.state.email,



        }

        this.props.registerUser(newUser, this.props.history);
    }

    render() {

        const { errors } = this.state;
        // Same as:
        // const errors = this.state.errors;

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">
                                Create your Flybuy account
                            </p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <input
                                    className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.name
                                    })}
                                    name="username"
                                    type="text"
                                    placeholder="username"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                                {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                                <input
                                    className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.email
                                    })}
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                                {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}

                                <input
                                    className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.password
                                    })}

                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                <input
                                    className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.password2
                                    })}

                                    name="password2"
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={this.state.password2}
                                    onChange={this.onChange}
                                />
                                {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}

                                <input
                                    className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.name
                                    })}
                                    name="firstName"
                                    type="text"
                                    placeholder="firstName"
                                    value={this.state.firstName}
                                    onChange={this.onChange}
                                />

                                <input
                                    className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.name
                                    })}
                                    name="lastName"
                                    type="text"
                                    placeholder="lastName"
                                    value={this.state.lastName}
                                    onChange={this.onChange}
                                />

                                <input
                                    className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.name
                                    })}
                                    name="address"
                                    type="text"
                                    placeholder="address"
                                    value={this.state.address}
                                    onChange={this.onChange}
                                />
                                
                                <input
                                    className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.name
                                    })}
                                    name="contactno"
                                    type="text"
                                    placeholder="contactno"
                                    value={this.state.contactno}
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));