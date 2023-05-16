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
    let { isAuthenticated, isAdmin } = this.props.user;

    let adminLinks = (
      <Link to="/users-list" className="nav-link active">
        Сотрудники
      </Link>
    );
    let authLinks = (
      <ul className="navbar-nav">
        <li className="nav-item dropdown cursor-pointer">
          <Link
            className="nav-link active"
            id="navbarDropdown"
            role="button"
            to="/my-profile">
            Мой профиль
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link active"
            id="ordersButton"
            role="button"
            to="/orders">
            Заказы
          </Link>
        </li>
        {isAdmin ? adminLinks : ''}
        <Link to="/" className="nav-link active" onClick={this.onLogout}>
          Выйти
        </Link>
      </ul>
    );

    let guestLinks = (
      <ul className="navbar-nav mr-lg-4">
        <li className="nav-item">
          <Link className="nav-link active" to="/register">
            Регистрация
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/login">
            Вход
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand col-sm-8 mb-3" to="/">
          <img src={logo} alt="STO" className="col-sm-4 mb-2" />
        </Link>

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
  user: state.user
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
