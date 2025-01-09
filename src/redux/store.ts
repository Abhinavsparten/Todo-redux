import { createStore, combineReducers } from 'redux';
import todosReducer from './todoReducer.ts';

const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = createStore(rootReducer);

export default store;
