import { createStore } from 'remote-redux'
import fetch  from 'node-fetch'
import { reducer } from './reducers'
import { logger } from './middleware'


function makeRequest(state, action, callback) {
  fetch('http://localhost:3000/apply-actions', {
    method: 'POST',
    body: JSON.stringify({ state, action }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(response => {
      callback(response.newState)
    })
    .catch(response => {
      console.log('Error setting state remotely. Defaulting to previous state');
      callback(state.getState());
    })
}

const store = createStore({
  reducer,
  initialState: { timestamp: null, counter: 0 },
  middlewares: [logger],
  makeRequest
})

store.dispatch({ type: 'LOAD_COUNTER', remote: true })
// the server will eventually return a new state: { counter: 5 }

store.dispatch({ type: 'INCREASE_COUNTER' })
// state: { counter: 1 } (before the counter is loaded)
// state: { counter: 6 } (after the counter is loaded)