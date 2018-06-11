import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';

class Login extends React.Component{
    // History (router) to redirect to the home page of the app.
    submit = data => {
        // Init the login action with the user credentials
        this.props.login(data).then(() => this.props.history.push("/dashboard"));
    };

    render() {
        return(
        <div>
            <h1>Login</h1>

            <LoginForm submit={this.submit}/>
        </div>
        );
    }
}

Login.propTypes = {
    // Have the history and the push avaliable
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

// Connect this login to redux 
export default connect(null, {login})(Login);