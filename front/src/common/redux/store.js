import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer, applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;