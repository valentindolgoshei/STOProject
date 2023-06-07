import { SET_AUTOPART, SET_AUTOPARTS } from '../actions/types';

const initialState = {
  autopartsList: [],
  currentAutopart: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTOPARTS:
      return {
        ...state,
        autopartsList: action.payload
      };
    case SET_AUTOPART:
      return {
        ...state,
        currentAutopart: action.payload
      };
    default:
      return state;
  }
}
