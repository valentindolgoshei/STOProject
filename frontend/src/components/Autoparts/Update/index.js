import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getAutopart, updateAutopart } from '../../../redux/actions/autopart';
import { unsetErrors } from '../../../redux/actions/error';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Form from './Form';

class UpdateAutopart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autopartData: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.props.unsetErrors();
  }

  componentDidMount() {
    this.props.getAutopart(this.props.match.params.autopartId).then(() => {
      this.setState({
        ...this.state,
        autopartData: this.props.autopart.currentAutopart
      });
    });
  }

  handleSubmit() {
    this.props.unsetErrors();
    this.props.updateAutopart(this.props.history, this.state.autopartData);
  }

  handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({
      autopartData: {
        ...this.state.autopartData,
        [id]: value
      }
    });
  }

  render() {
    if (_.isEmpty(this.state.autopartData)) {
      return null;
    }

    return (
      <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        errors={this.props.errors.updateAutopart}
        autopart={this.props.autopart.currentAutopart}
      />
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  autopart: state.autopart
});

const mapDispatchToProps = {
  getAutopart,
  updateAutopart,
  unsetErrors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UpdateAutopart));

UpdateAutopart.propTypes = {
  unsetErrors: PropTypes.func,
  updateAutopart: PropTypes.func,
  getAutopart: PropTypes.func,
  match: PropTypes.object,
  autopart: PropTypes.object,
  history: PropTypes.object,
  errors: PropTypes.object
};
