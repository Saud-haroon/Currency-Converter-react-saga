import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

import reducers from './reducer/index'
import ratesSaga from './saga/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  );

sagaMiddleware.run(ratesSaga)

export default store