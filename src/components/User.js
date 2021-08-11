import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/authActions';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],

        };
    }





    // this.onChange = this.onChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
    //}
    componentDidMount() {
        this.props.fetchUser();
    }

    onChange(e) {
        this.setState({
            // way to keep this code DRY so this one function works on ALL the input fields
            [e.target.name]: e.target.value
        });
    }
    render()
     {

        // const userData = this.props.userData;
        // const users = userData.users;
        //const currentUsers = users && users.slice(firstIndex, lastIndex);
        {

            return (
                <div>

                    <div className="card">
                        <h5 class="card-header">UserDeatils</h5>


                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <td>UserName</td>
                                        <td>FirstName</td>
                                        <td>LastName</td>
                                        <td>Address</td>
                                        <td>ContactNo</td>
                                        <td>Email</td>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* { {users,length === 0 ? (
                                        <tr align="center">
                                            <td colSpan="6">No Users Available</td>
                                        </tr>
                                    ) :
                                        ( }
                                             currentUsers.map((user, index) => (

                                                   <tr key={index}>
                                                   <td>
                                                        {user.first} {user.last}
                                                     </td>
                                                    <td>{user.username}</td>
                                                    <td>{user.firstName}</td>
                                                    <td>{user.lastName}</td>
                                                    <td>{user.address}</td>
                                                    <td>{user.contactno}</td>
                                                    <td>{user.email}</td>
                                                </tr>
                                                    ))
                                )
                                } */}
                            </tbody>
                        </table>
                   
                    </div>
                    </div>

                </div>
            );
        }

    }
}
    const mapStateToProps = (state) => {
        return {
            userData: state.User,
        }
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            fetchUser: () => dispatch(fetchUser()),
        }
    };

    export default connect(mapStateToProps, mapDispatchToProps)(User);
