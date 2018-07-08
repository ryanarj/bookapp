import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Image, Dropdown } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import * as actions from '../../actions/auth';
import { connect } from "react-redux";
import gravatarUrl from 'gravatar-url';

const NavigationBar = ({user, logout}) => (
    <Menu secondary pointing>
        <Menu.Item as={Link} to="/dashboard">Profile</Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item as={Link} to="/signup">Sign Up</Menu.Item>
            <Menu.Item class="ui item" onClick={() => logout()}>Logout</Menu.Item>
        </Menu.Menu>
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

