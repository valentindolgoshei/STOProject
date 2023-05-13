import { ERROR, SET_ORDER, SET_ORDERS } from './types';
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

export const updateOrder = (history, orderData) => {
  const sentOrderData = mapOrderDataToSentOrderData(orderData);
  return dispatch => {
    return request(
      'PUT',
      `api/orders/${orderData.userId}/${orderData.id}`,
      sentOrderData
    )
      .then(() => {
        alert('Заказ обновлен');
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
            updateOrder: errorsObject
          }
        });
      });
  };
};

export const getOrder = orderId => {
  return dispatch => {
    return request('GET', `api/orders/${orderId}`)
      .then(response => {
        const order = response;
        dispatch(setOrder(order));
      })
      .catch(err => {
        console.error('Error getting order ', err);
      });
  };
};

export const setOrders = orders => {
  return {
    type: SET_ORDERS,
    payload: orders
  };
};

export const setOrder = order => {
  return {
    type: SET_ORDER,
    payload: order
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
