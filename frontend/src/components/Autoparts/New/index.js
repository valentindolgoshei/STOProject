import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Form from './Form';
import PropTypes from 'prop-types';
import { createAutopart } from '../../../redux/actions/autopart';
import { unsetErrors } from '../../../redux/actions/error';

class CreateAutopart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autopartData: {
        article: '',
        name: '',
        yearOfProduction: undefined,
        vehicle: '',
        amount: undefined
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.props.unsetErrors();
  }

  handleSubmit() {
    this.props.unsetErrors();
    this.props.createAutopart(this.props.history, this.state.autopartData);
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
    return (
      <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        errors={this.props.errors.createAutopart}
      />
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = {
  createAutopart,
  unsetErrors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateAutopart));

CreateAutopart.propTypes = {
  unsetErrors: PropTypes.func,
  createAutopart: PropTypes.func,
  history: PropTypes.object,
  errors: PropTypes.object
};
