import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import exerciseReducer from './reducers/exerciseReducer';

const store = createStore(exerciseReducer, applyMiddleware(thunk));

export default store;
