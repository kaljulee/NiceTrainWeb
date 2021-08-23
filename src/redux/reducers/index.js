import { combineReducers } from 'redux';
import trainReducer from './trainReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
  train: trainReducer,
  settings: settingsReducer
});

export default rootReducer;
