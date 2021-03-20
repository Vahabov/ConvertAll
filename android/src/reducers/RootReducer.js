import { combineReducers } from 'redux';
import ExchangeReducers from './ExchangeReducers';

export default combineReducers({
    exc: ExchangeReducers
})