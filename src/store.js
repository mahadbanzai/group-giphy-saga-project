import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import axios from "axios";

function* fetchGifs (action){
    try{
        let response = yield axios ({
            method: 'GET',
            url: '/api/favorites'
        })
            yield put ({
                type: 'SET_GIFS',
                payload: response.data
            });
        } catch(error) {
            console.log('Unable to get favorite from server', error);
        }
}

function* rootSaga() {
    yield takeLatest('FETCH_GIFS', fetchGifs);
}
const sagaMiddleware = createSagaMiddleware();

// This function (our reducer) will be called when an 
// action is dipatched. state = ['Apple'] sets the default 
// value of the array.
const favoriteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIFS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const store = createStore(
    combineReducers({
        favoriteReducer,

    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);


export default store;


