import RootReducers from '../reducers/RootReducer';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

export const store = createStore(
    RootReducers,
    applyMiddleware(Thunk)
)