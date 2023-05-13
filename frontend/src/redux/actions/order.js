import { ERROR, SET_ORDERS } from './types';
import request from '../../utils/request';

export const getOrders = () => {
  return dispatch => {
    return request('GET', 'api/orders')
      .then(response => {
        const orders = response;
        dispatch(setOrders(orders));
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const setOrders = orders => {
  return {
    type: SET_ORDERS,
    payload: orders
  };
};
