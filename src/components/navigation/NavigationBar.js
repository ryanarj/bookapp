import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import * as actions from '../../actions/auth';
import { connect } from "react-redux";

const NavigationBar = ({user, logout}) => (
    <Menu >
        <Menu class="ui secondary pointing menu">
            <a as={Link} to="/dashboard" class="active item">Profile</a>
            <a class="item">Messages</a>
            <a class="item">About</a>
            <a class="ui item" onClick={() => logout()}>Logout</a>
        </Menu>
    </Menu>
);

NavigationBar.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired
    }).isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {logout: actions.logout})(NavigationBar);

