import React from 'react';
import { withRouter } from 'react-router';
import OrdersTable from './Table';
import PropTypes from 'prop-types';
import { getOrders } from '../../redux/actions/order';
import { connect } from 'react-redux';

class OrdersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    this.props.getOrders().then(() => {
      console.log('after request');
      this.setState({
        ...this.state,
        orders: this.props.orders.ordersList
      });
    });
  }

  render() {
    if (!this.state.orders) {
      return null;
    }
    return <OrdersTable orders={this.state.orders} />;
  }
}

const mapStateToProps = state => ({
  orders: state.orders
});

const mapDispatchToProps = {
  getOrders
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OrdersList));

OrdersList.propTypes = {
  orders: PropTypes.any,
  getOrders: PropTypes.func
};
