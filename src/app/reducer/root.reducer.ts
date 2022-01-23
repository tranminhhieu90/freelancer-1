import reducer from 'containters/counter/counterSlice';
import { combineReducers } from 'redux';
export const rootReducer = combineReducers({
  counter: reducer,
});
