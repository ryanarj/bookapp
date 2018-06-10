import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/auth';

const Home = ({isAuth, logout}) => (
    <div>
        <h1>Home</h1>
        {isAuth ? <button onClick={() => logout()}>Logout</button> : <Link to="/login">Login</Link>}
    </div>
);

Home.propType = {
    isAuth : PropTypes.bool.isRequired,
    logout : PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        isAuth : !!state.user.token
    };
}

export default connect(mapStateToProps, { logout: actions.logout })(Home);
