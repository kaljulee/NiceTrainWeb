import { configureStore } from '@reduxjs/toolkit';
import baseReducer from '../reducers/baseReducer';

export const store = configureStore({ reducer: baseReducer });
