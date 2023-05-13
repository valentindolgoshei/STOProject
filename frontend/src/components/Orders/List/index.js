import React from 'react';
import { withRouter } from 'react-router';
import OrdersTable from './Table';
import PropTypes from 'prop-types';
import { getOrders, deleteOrder } from '../../../redux/actions/order';
import { connect } from 'react-redux';

class OrdersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
    this.handleDeleteOrder = this.handleDeleteOrder.bind(this);
  }

  componentDidMount() {
    this.refreshOrders();
  }

  refreshOrders() {
    this.props.getOrders().then(() => {
      this.setState({
        ...this.state,
        orders: this.props.order.ordersList
      });
    });
  }

  render() {
    if (!this.state.orders) {
      return null;
    }
    return (
      <OrdersTable
        orders={this.state.orders}
        handleDeleteOrder={this.handleDeleteOrder}
      />
    );
  }

  handleDeleteOrder(orderId) {
    this.props.deleteOrder(orderId).then(() => this.refreshOrders());
  }
}

const mapStateToProps = state => ({
  order: state.order
});

const mapDispatchToProps = {
  getOrders,
  deleteOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OrdersList));

OrdersList.propTypes = {
  order: PropTypes.any,
  getOrders: PropTypes.func,
  deleteOrder: PropTypes.func
};
