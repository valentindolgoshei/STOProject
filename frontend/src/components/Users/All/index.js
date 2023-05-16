import React from 'react';
import { getAllUsers } from '../../../redux/actions/user';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '../../common/Users/List';

class UsersList extends React.Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return <List users={this.props.user.allUsers} heading="Сотрудники" />;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  getAllUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UsersList));

UsersList.propTypes = {
  getUserFeed: PropTypes.func,
  user: PropTypes.any,
  users: PropTypes.any,
  heading: PropTypes.string,
  getAllUsers: PropTypes.func
};
