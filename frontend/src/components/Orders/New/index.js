import React from 'react';
import { unsetErrors } from '../../../redux/actions/error';
import { createOrder } from '../../../redux/actions/order';
import { getAllUsers, me } from '../../../redux/actions/user';
import { withRouter } from 'react-router';
import Form from './Form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CreateOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderData: {
        auto: '',
        model: '',
        defect: '',
        receivedOn: undefined,
        expectedCompletionOn: undefined,
        expectedCost: undefined,
        userId: undefined,
        customer: undefined
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.props.unsetErrors();
  }

  componentDidMount() {
    this.props.getAllUsers().then(() => {
      this.setState({
        orderData: {
          ...this.state.orderData,
          userId: `${this.props.user.allUsers[0].id}`
        }
      });
    });
  }

  handleSubmit() {
    this.props.unsetErrors();
    this.props.createOrder(this.props.history, this.state.orderData);
  }

  handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({
      orderData: {
        ...this.state.orderData,
        [id]: value
      }
    });
  }

  render() {
    return (
      <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        errors={this.props.errors.createOrder}
        users={this.props.user.allUsers}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});

const mapDispatchToProps = {
  createOrder,
  unsetErrors,
  getAllUsers,
  me
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateOrder));

CreateOrder.propTypes = {
  unsetErrors: PropTypes.func,
  createOrder: PropTypes.func,
  getAllUsers: PropTypes.func,
  history: PropTypes.object,
  errors: PropTypes.object,
  user: PropTypes.object,
  me: PropTypes.func
};
