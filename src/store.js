import {createStore} from 'redux';
import rootReducer from './reducers/index';

//TODO: Make createStore method which accept the reducer as a parameter
// store hold aplication state which is in reducer as initial state
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;


//! Redux Store 
/*
? Hold Appplication state
? Allows to access state via getState()
? Allows to update via dispatch()
? Register Listner via subscriber(listner)
? Unsubscribe
*/

