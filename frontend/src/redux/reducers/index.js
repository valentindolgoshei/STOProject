import { combineReducers } from 'redux';
import commonReducer from './common';
import userReducer from './user';
import errorReducer from './error';
import orderReducer from './order';

export default combineReducers({
  common: commonReducer,
  user: userReducer,
  errors: errorReducer,
  order: orderReducer
});
