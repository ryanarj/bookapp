import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const GuestRoute = ({ isAuth, component: Component, ...rest}) => (
<Route {...rest} 
    render={props => !isAuth ? <Component {...props} /> : <Redirect to="/dashboard" />
}/>
);

GuestRoute.propTypes= {
    component: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
}

function mapsStateToProps(state) {
    return{
        isAuth: !! state.user.token
    }
}

export default connect(mapsStateToProps)(GuestRoute);