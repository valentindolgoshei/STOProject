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

export const createOrder = (history, orderData) => {
  const sentOrderData = mapOrderDataToSentOrderData(orderData);
  return dispatch => {
    return request('POST', `api/orders/${orderData.userId}`, sentOrderData)
      .then(() => {
        alert('Заказ создан');
        history.push('/orders');
      })
      .catch(err => {
        const errorsMessage = err.response.data.message;
        const errorsObject = {};
        errorsMessage.forEach(error => {
          errorsObject[error.property] =
            error.constraints[Object.keys(error.constraints)[0]];
        });
        dispatch({
          type: ERROR,
          payload: {
            createOrder: errorsObject
          }
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

function mapOrderDataToSentOrderData(orderData) {
  return {
    ...orderData,
    receivedOn: new Date(orderData.receivedOn),
    expectedCompletionOn: new Date(orderData.expectedCompletionOn),
    expectedCost: Number(orderData.expectedCost),
    userId: Number(orderData.userId)
  };
}
