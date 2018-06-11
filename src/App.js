import React from 'react';
import {Route} from 'react-router';
import PropTypes from 'prop-types';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = ({location}) =>   
  <div className="ui container">
    <Route location={location} path="/" exact component={Home} />
    <GuestRoute location={location} path="/login" exact component={Login} />
    <UserRoute location={location} path="/dashboard" exact component={Dashboard} />
  </div>;


App.PropTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;
