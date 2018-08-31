import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducers'
import { logger } from './middleware'

const store = createStore(reducer,
  { counter: 0, timestamp: null},
  applyMiddleware(logger));


store.dispatch({type: 'INCREASE_COUNTER'})

store.dispatch({type: 'UPDATE_TIMESTAMP'})

