import React from 'react';
import { getViewedUser, me } from '../../../redux/actions/user';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './Card';
import _ from 'lodash';

class Profile extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.me().then(() => {
      this.props.getViewedUser(userId);
    });
  }

  render() {
    if (_.isEmpty(this.props.user.viewedUser)) {
      return null;
    }

    return <Card user={this.props.user.viewedUser} />;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  getViewedUser,
  me
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
  user: PropTypes.any
};
