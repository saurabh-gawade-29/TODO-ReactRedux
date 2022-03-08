//! This file is use as root reducer
import todoReducers from './todoReducer';
import {combineReducers} from 'redux';

//TODO: Combine Multiple Reducers: 
//? combineReducer() method accept reducer obect as parameter
const rootReducer = combineReducers({
    todoReducers
})
// Now rootReducer contain todoReducer.

export default rootReducer;