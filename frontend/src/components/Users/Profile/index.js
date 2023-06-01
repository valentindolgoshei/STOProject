import React from 'react';
import {
  getViewedUser,
  me,
  activateUser,
  deactivateUser
} from '../../../redux/actions/user';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './Card';
import _ from 'lodash';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleActivate = this.handleActivate.bind(this);
    this.handleDeactivate = this.handleDeactivate.bind(this);
  }

  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.me().then(() => {
      this.props.getViewedUser(userId);
    });
  }

  handleDeactivate() {
    this.props.deactivateUser(this.props.user.viewedUser.id);
  }

  handleActivate() {
    this.props.activateUser(this.props.user.viewedUser.id);
  }

  render() {
    if (_.isEmpty(this.props.user.viewedUser)) {
      return null;
    }

    return (
      <Card
        user={this.props.user.viewedUser}
        handleActivate={this.handleActivate}
        handleDeactivate={this.handleDeactivate}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  getViewedUser,
  me,
  activateUser,
  deactivateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));

Profile.propTypes = {
  getUserFeed: PropTypes.func,
  match: PropTypes.any,
  me: PropTypes.any,
  getViewedUser: PropTypes.any,
  user: PropTypes.any,
  handleActivate: PropTypes.func,
  handleDeactivate: PropTypes.func,
  activateUser: PropTypes.func,
  deactivateUser: PropTypes.func
};
