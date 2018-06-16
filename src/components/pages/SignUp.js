import React from 'react';
import SignUpForm from '../forms/SignUpForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { signup } from '../../actions/users';

class SignUp extends React.Component{
    submit = (data) => 
        this.props.signup(data).then(() => this.props.history.push('/dashboard'));

    render(){
        return(
            <div>
                <SignUpForm submit={this.submit} />
            </div>
        );
    }
}

SignUp.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
}

export default connect(null, {signup})(SignUp);