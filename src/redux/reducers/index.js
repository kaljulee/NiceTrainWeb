import { combineReducers } from 'redux';
import trainReducer from './trainReducer';

const rootReducer = combineReducers({
  train: trainReducer
});

export default rootReducer;
