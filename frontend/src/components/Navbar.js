import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/user';
import { withRouter } from 'react-router-dom';
import logo from '../assets/logo.jpg';

class Navbar extends Component {
  onLogout = () => this.props.logoutUser(this.props.history);

  render() {
    let { isAuthenticated, userInfo } = this.props.user;
    let authLinks = (
      <ul className="navbar-nav ml-lg-5">
        <li className="nav-item dropdown cursor-pointer">
          <div
            className="nav-link dropdown-toggle active"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            @{userInfo.login}
          </div>
        </li>
        <Link to="/users-list" className="nav-link active">
          All Users
        </Link>
        <Link to="/" className="nav-link active" onClick={this.onLogout}>
          Logout
        </Link>
      </ul>
    );

    let guestLinks = (
      <ul className="navbar-nav mr-lg-4">
        <li className="nav-item">
          <Link className="nav-link active" to="/register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/login">
            Log In
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand col-sm-10 mb-3" to="/">
          <img src={logo} alt="STO" className="col-sm-4 mb-2" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarSupportedContent">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  cart: state.cart
});

const mapDispatchToProps = {
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar));

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  history: PropTypes.object
};
