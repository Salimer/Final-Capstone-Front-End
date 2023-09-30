import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; // Use configureStore from Redux Toolkit

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import motorcyclesReducer from './motorcycles/motorcycles';
import reservationsReducer from './reservations/reservation';
import usersReducer from './users/users';
import authReducer from './auth/authSlice';

const rootReducer = combineReducers({
  motorcycles: motorcyclesReducer,
  reservations: reservationsReducer,
  users: usersReducer,
  auth: authReducer,
});

const middleware = [thunk, logger]; // Define your middleware here

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), ...middleware], // Apply middleware here
});

export default store;
