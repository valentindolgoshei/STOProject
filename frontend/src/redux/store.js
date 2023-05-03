import thunk from 'redux-thunk';
import { init as initRequest } from 'utils/request';
import { apiStartLoading, apiEndLoading, throwError } from './actions/common';
import rootReducer from './reducers';
import { configureStore } from "@reduxjs/toolkit";

const inititalState = {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: inititalState,
  middleware: [thunk]
  });

const requestInitOptions = {
  reduxStore: store,
  initRequestCallback: apiStartLoading,
  finishRequestCallback: apiEndLoading,
  throwError
};

initRequest(requestInitOptions);

export default store;
