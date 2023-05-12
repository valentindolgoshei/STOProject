import React from 'react';
import { getViewedUser, me, updateUser } from '../../../redux/actions/user';
import { unsetErrors } from '../../../redux/actions/error';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Form from './Form';

class MyProfile extends React.Component {
  componentDidMount() {
    this.props.me().then(() => {
      this.setState({
        ...this.state,
        userInfo: this.props.user.userInfo
      });
    });
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.props.unsetErrors();
  }

  handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({
      userInfo: {
        ...this.state,
        [id]: value
      }
    });
  }

  handleSubmit() {
    this.props.unsetErrors();
    this.props.updateUser(this.props.history, this.state.userInfo);
  }

  render() {
    if (_.isEmpty(this.state.userInfo)) {
      return null;
    }

    return (
      <Form
        user={this.state.userInfo}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        errors={this.props.errors.updateUser}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});

const mapDispatchToProps = {
  me,
  getViewedUser,
  unsetErrors,
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MyProfile));

MyProfile.propTypes = {
  match: PropTypes.any,
  me: PropTypes.any,
  user: PropTypes.any,
  getViewedUser: PropTypes.any,
  unsetErrors: PropTypes.func,
  updateUser: PropTypes.func,
  history: PropTypes.object,
  errors: PropTypes.object
};
