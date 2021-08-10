import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { addCat } from '../actions/catActions';

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

    const newCat = {
        catid: this.state.catid,
        catname: this.state.catname,
        catdescription: this.state.catdescription,
    }
    this.props.addCat(newCat, this.props.history); 
}

render() {

    // const { errors } = this.state;
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
                            // className={classnames('form-control form-control-lg', {
                            //     'is-invalid': errors.catid
                            // })}
                            name="catid"
                            type="text"
                            placeholder="catid"
                            value={this.state.catid}
                            onChange={this.onChange}
                        />
                       
                        <input
                            // className={classnames('form-control form-control-lg', {
                            //     'is-invalid': errors.catname
                            // })}
                            name="catname"
                            type="text"
                            placeholder="catname"
                            value={this.state.catname}
                            onChange={this.onChange}
                        />

                    
                        <input
                            // className={classnames('form-control form-control-lg', {
                            //     'is-invalid': errors.catdescription
                            // })}
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
    // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    cat: state.cat,
    // errors: state.errors
});

export default connect(mapStateToProps, { addCat })(withRouter(CategoryAdm));