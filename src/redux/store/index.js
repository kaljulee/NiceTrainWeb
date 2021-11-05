import { configureStore } from '@reduxjs/toolkit';
import trainReducer from '../reducers/trainReducer';
import settingsReducer from '../reducers/settingsReducer';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: { train: trainReducer, settings: settingsReducer },
});
