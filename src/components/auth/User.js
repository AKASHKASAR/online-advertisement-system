import React, { Component } from 'react';
import axios from "axios";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []

        }

    }

    componentDidMount() {

        axios
            .get("/admin/getAllUserDetails")
            .then(response => response.data)
            .then((data) => {
                this.setState({ users: data })

            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    deleteRow(userid, e) {
        axios.delete(`/admin/deleteUser/${userid}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                const users = this.state.users.filter(item => item.userid !== userid);
                this.setState({ users });

            })


    }

    render() {

        {

            return (
                <div>

                    <div className="card">
                        <h5 class="card-header">UserDeatils</h5>


                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <td>UserID</td>
                                        <td>UserName</td>
                                        <td>FirstName</td>
                                        <td>LastName</td>
                                        <td>Address</td>
                                        <td>ContactNo</td>
                                        <td>Email</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>



                                    {this.state.users.map((user) => (

                                        <tr >

                                            <td>{user.userid}</td>
                                            <td>{user.username}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.address}</td>
                                            <td>{user.contactno}</td>
                                            <td>{user.email}</td>
                                            <td><button className="btn btn-danger" onClick={(e) => this.deleteRow(user.userid, e)}>Delete</button></td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>
            );
        }

    }
}


export default User;
