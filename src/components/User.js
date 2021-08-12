import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/authActions';
import axios from "axios";
import { USER_FAILURE } from '../actions/types';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []

        };
    }





    // this.onChange = this.onChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
    //}
    componentDidMount() {
        // this.props.fetchUser();
        
        axios
        .get("/admin/getAllUserDetails")
        .then(response=>response.data)
        .then((data)=>{
          this.setState({users:data})
          
        })
        .catch((error) => {
            console.log(error.message)
          })
        }
       
         
        deleteRow(userid, e){  
            axios.delete(`/admin/deleteUser/${userid}`)  
              .then(res => {  
                console.log(res);  
                console.log(res.data);  
                const users= this.state.users.filter(item => item.userid !== userid);  
                this.setState({ users });  
                 
              })  
        
    

   }



    
    render()
     {

        // const userData = this.props.userData;
        // const users = userData.users;
        // const currentUsers = users ;
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

                                     
                                        
                                            { this.state.users.map((user) => (

                                                   <tr >
                                                   {/* <thead scope="row">{index+1}</thead> */}
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
    // const mapStateToProps = (state) => {
    //     return {
    //         users: state.userData.users,
    //     }
    // };

    // const mapDispatchToProps = (dispatch) => {
    //     return {
    //         fetchUser: () => dispatch(fetchUser()),
    //     }
    // };

    // export default connect(mapStateToProps, mapDispatchToProps)(User);

    export default User;
