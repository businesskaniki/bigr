import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import makeupReducer from './Makeup';
import makeupdetailReducer from './Makeupdetail';

const rootReducer = combineReducers({ makeup: makeupReducer, makeupdetail: makeupdetailReducer });
const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

export default store;
