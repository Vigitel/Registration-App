// src/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';  // Import thunk as a named export
import userReducer from './reducers/userReducer'; // Ensure this file exists

const reducer = combineReducers({
  user: userReducer,
  // add other reducers here if needed
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
