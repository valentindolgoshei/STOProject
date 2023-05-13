import { SET_ORDERS } from '../actions/types';

const initialState = {
  ordersList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        ordersList: action.payload
      };
    default:
      return state;
  }
}
