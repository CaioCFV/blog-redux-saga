import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reddit from './reducers/reddit';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    reddit,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga)

export default store;















