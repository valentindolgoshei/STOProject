import { SET_ORDER, SET_ORDERS } from '../actions/types';

const initialState = {
  ordersList: [],
  currentOrder: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        ordersList: action.payload
      };
    case SET_ORDER:
      return {
        ...state,
        currentOrder: action.payload
      };
    default:
      return state;
  }
}
