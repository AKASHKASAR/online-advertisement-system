import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';



export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }


    handleSubmit = event => {
        event.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:8084/login', user)
            .then(res => {
                console.log(res.data.role);
                const role = res.data.role;
                if (role === "ADMIN") {
                    this.props.history.push({ pathname: '/AdminFunction', state: { detail: res.data } });
                }
                else if (role === "USER") {
                    this.props.history.push({ pathname: '/UserFunction', state: { detail: res.data } });
                }

            })
            .catch(err => {
                console.log(err.message);
                if (err.message === "Request failed with status code 405" || err.message === "Request failed with status code 400") {
                    this.props.history.push('/notfound');
                }
            });

    }



    render() {


        return (
            <div>
                <div className="row " >
                    <div className="col-md-6 offset-md-3">
                        <br/>
                        
                        <div className=" card card-info  ">
                            <form className="card-body  card-info " onSubmit={this.handleSubmit}>
                                <div className="form-group ">
                                    <br/>
                                    <div className="row">
                                        <div className="col-sm-2 col-2 offset-sm-1 ">
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="col-sm-8 col-10 ">
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={this.handleChange('email')} required />
                                        </div>
                                    </div> 
                                </div>
                                <div className="form-group ">
                                    <div className="row mt-2">
                                        <div className="col-sm-2 col-2 offset-sm-1">
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <div className="col-sm-8 col-10">
                                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.handleChange('password')} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-2 text-center">
                                    <button type="submit" className="btn btn-success btn-block"  >Login</button>
                                </div>
                                <hr />
                                <h5 className="text-center">Don't have an Account? </h5>
                                <div className="form-group mt-2 text-center">
                                    <Link to="/register"> <button className="btn btn-primary btn-md">Create Account</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);