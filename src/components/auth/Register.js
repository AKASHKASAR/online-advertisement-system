import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            address: "",
            contactno: "",
            role: "USER"

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.firsthandler = this.firsthandler.bind(this);
        this.lasthandler = this.lasthandler.bind(this);
        this.passwordhandler = this.passwordhandler.bind(this);
        this.usernamehandler = this.usernamehandler.bind(this);
        this.addressHandler = this.addressHandler.bind(this);
        this.contactnoHandler = this.contactnoHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    usernamehandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    emailHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    addressHandler = e => {
        this.setState({
            address: e.target.value
        })
    }

    contactnoHandler = e => {
        this.setState({
            contactno: e.target.value
        })
    }



    handleSubmit = (event) => {

        console.log(this.state);
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            contactno: this.state.contactno,
            role: this.state.role
        }
        axios.post('/Registration', user)
            .then(res => {
                console.log(res.data);
                console.log(res.status);
                if (res.status === 200) {
                    this.props.history.push('/');
                }

            }).catch(e => {
                console.log(e.message);
                if (e.message === "Request failed with status code 409") {
                    alert("User With Entered Email already Exists");
                }

            });
        this.setState({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            address: "",
            contactno: "",

        })
        event.preventDefault();


    }




    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card-info">
                            <div className="card-body card-info">
                                <form onSubmit={this.handleSubmit}>
                                
                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>FirstName </label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="Enter your FirstName" /><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>LastName </label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="Enter your LastName" /><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Email </label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="email" value={this.state.email} onChange={this.emailHandler} placeholder="Enter your Email" required /><br />
                                        </div>
                                    </div>
                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Password </label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Enter your Password" required /><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>ContactNo </label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="number" value={this.state.contactno} onChange={this.contactnoHandler} placeholder="Enter your ContactNo" /><br />
                                        </div>
                                    </div>



                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Address </label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="text" value={this.state.address} onChange={this.addressHandler} placeholder="Enter your Address" /><br />
                                        </div>
                                    </div>


                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Username</label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="text"value={this.state.username} onChange={this.usernamehandler} placeholder="Enter your Username" required /><br />
                                        </div>
                                    </div>
                                    <div className="form-group mt-2 text-center">
                                    <input type="submit" className="btn btn-success btn-block" value="Register" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Register;