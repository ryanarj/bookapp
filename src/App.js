import React from 'react';
import {Route} from 'react-router';
import PropTypes from 'prop-types';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/Dashboard';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import NavigationBar from './components/navigation/NavigationBar'
import NewBlogPost from './components/pages/NewBlogPost';
import {connect} from 'react-redux';

const App = ({location}) =>   
  <div className="ui container">
    <NavigationBar/>
    <Route location={location} path="/" exact component={Home} />
    <GuestRoute location={location} path="/login" exact component={Login} />
    <GuestRoute location={location} path="/signup" exact component={SignUp} />
    <UserRoute location={location} path="/dashboard" exact component={Dashboard} />
    <UserRoute location={location} path="/blogPosts/new" exact component={NewBlogPost} />
  </div>;


App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

function mapStateToProps(state){
  return {
    isAuth: !!state.user.email
  }
}

export default connect(mapStateToProps, {})(App);
