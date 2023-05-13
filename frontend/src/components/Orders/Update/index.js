import React from 'react';
import { unsetErrors } from '../../../redux/actions/error';
import { updateOrder, getOrder } from '../../../redux/actions/order';
import { getAllUsers, me } from '../../../redux/actions/user';
import { withRouter } from 'react-router';
import Form from './Form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as _ from 'lodash';

class UpdateOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderData: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.props.unsetErrors();
  }

  componentDidMount() {
    this.props.getOrder(this.props.match.params.orderId).then(() => {
      this.setState({
        ...this.state,
        orderData: this.props.order.currentOrder
      });
    });
    this.props.getAllUsers();
  }

  handleSubmit() {
    this.props.unsetErrors();
    this.props.updateOrder(this.props.history, this.state.orderData);
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
    if (_.isEmpty(this.state.orderData)) {
      return null;
    }

    return (
      <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        errors={this.props.errors.updateOrder}
        users={this.props.user.allUsers}
        order={this.props.order.currentOrder}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors,
  order: state.order
});

const mapDispatchToProps = {
  getOrder,
  updateOrder,
  unsetErrors,
  getAllUsers,
  me
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UpdateOrder));

UpdateOrder.propTypes = {
  unsetErrors: PropTypes.func,
  updateOrder: PropTypes.func,
  getAllUsers: PropTypes.func,
  getOrder: PropTypes.func,
  match: PropTypes.object,
  order: PropTypes.object,
  history: PropTypes.object,
  errors: PropTypes.object,
  user: PropTypes.object,
  me: PropTypes.func
};
