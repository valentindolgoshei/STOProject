import { combineReducers } from 'redux';
import commonReducer from './common';
import userReducer from './user';
import errorReducer from './error';
import orderReducer from './order';
import autopartReducer from './autopart';

export default combineReducers({
  common: commonReducer,
  user: userReducer,
  errors: errorReducer,
  order: orderReducer,
  autopart: autopartReducer
});
