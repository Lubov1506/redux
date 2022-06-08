import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../redusers/index';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware()
const enhancer = applyMiddleware(sagaMiddleware)
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga)

export default store;