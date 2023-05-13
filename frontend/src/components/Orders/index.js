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
    return <OrdersTable orders={this.state.orders} />;
  }
}

const mapStateToProps = state => ({
  order: state.order
});

const mapDispatchToProps = {
  getOrders
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OrdersList));

OrdersList.propTypes = {
  order: PropTypes.any,
  getOrders: PropTypes.func
};
