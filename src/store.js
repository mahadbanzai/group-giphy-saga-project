import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from 'redux';


const dummy = () => {
    return true
}

//! 
const store = createStore(
    combineReducers({
        dummy
    }),
    applyMiddleware(logger), 
  );
  
  export default store;