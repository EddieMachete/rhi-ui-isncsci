import { combineReducers, createStore } from 'redux';
import { neurologyForm } from './reducers/neurology-form';

export const store = createStore(combineReducers({neurologyForm}));