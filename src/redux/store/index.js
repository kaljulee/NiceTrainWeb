import { configureStore } from '@reduxjs/toolkit';
import trainReducer from '../reducers/trainReducer';

export const store = configureStore({ reducer: trainReducer });
