import React from 'react';
import {Route} from 'react-router';
import PropTypes from 'prop-types';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/Dashboard';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = ({location}) =>   
  <div className="ui container">
    <div class="ui secondary pointing menu">
        <a class="active item">Profile</a>
        <a class="item">Messages</a>
        <a class="item">About</a>
        <div class="right menu">
            <a class="ui item">Logout</a>
        </div>
    </div>
    <div class="ui segment">
    </div>
    <Route location={location} path="/" exact component={Home} />
    <GuestRoute location={location} path="/login" exact component={Login} />
    <GuestRoute location={location} path="/signup" exact component={SignUp} />
    <UserRoute location={location} path="/dashboard" exact component={Dashboard} />
  </div>;


App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;
