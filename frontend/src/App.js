import React, { Component } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { connect } from 'react-redux';
import { me, getAllUsers } from './redux/actions/user';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import UsersList from './components/Users/All';
import Profile from './components/Users/Profile';

import Home from './components/Home';
import Layout from './components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './index.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.isPermissions ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

class App extends Component {
  constructor(props) {
    super(props);
    this.props.me().then(() => {
      this.props.getAllUsers();
    });
  }

  render() {
    const { isAuthenticated } = this.props.user;

    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute
              isPermissions={isAuthenticated}
              exact
              path="/users-list"
              component={UsersList}
            />
            <PrivateRoute
              isPermissions={isAuthenticated}
              exact
              path="/users/:id"
              component={Profile}
            />
          </Layout>
        </Router>
      </Provider>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = {
  me,
  getAllUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  me: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object
};
