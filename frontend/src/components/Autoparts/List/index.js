import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AutopartsTable from './Table';
import PropTypes from 'prop-types';
import { getAutoparts, deleteAutopart } from '../../../redux/actions/autopart';
import { me } from '../../../redux/actions/user';
import _ from 'lodash';

class AutopartsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoparts: undefined,
      isAdmin: undefined
    };
    this.handleDeleteAutopart = this.handleDeleteAutopart.bind(this);
  }

  componentDidMount() {
    this.refreshAutoparts();
    this.props.me().then(() => {
      this.setState({
        ...this.state,
        isAdmin: this.props.user.isAdmin
      });
    });
  }

  refreshAutoparts() {
    this.props.getAutoparts().then(() => {
      console.log(this.props);
      this.setState({
        ...this.state,
        autoparts: this.props.autopart.autopartsList
      });
    });
  }

  render() {
    if (
      _.isUndefined(this.state.autoparts) ||
      _.isUndefined(this.state.isAdmin)
    ) {
      return null;
    }
    return (
      <AutopartsTable
        isAdmin={this.state.isAdmin}
        autoparts={this.state.autoparts}
        handleDeleteAutopart={this.handleDeleteAutopart}
      />
    );
  }

  handleDeleteAutopart(autopartId) {
    this.props.deleteAutopart(autopartId).then(() => this.refreshAutoparts());
  }
}

const mapStateToProps = state => ({
  autopart: state.autopart,
  user: state.user
});

const mapDispatchToProps = {
  getAutoparts,
  deleteAutopart,
  me
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AutopartsList));

AutopartsList.propTypes = {
  autopart: PropTypes.any,
  getAutoparts: PropTypes.func,
  deleteAutopart: PropTypes.func,
  me: PropTypes.func,
  user: PropTypes.object,
  isAdmin: PropTypes.bool
};
