import {combineReducers} from 'redux';
import counterReducer from './counter.reducer';

const counterApp = combineReducers({
    counterReducer
})

export default counterApp;