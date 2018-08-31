const counter = (state, action) => {
  if (action.type === 'INCREASE_COUNTER') {
    return state + 1;
  }
  return state;
}

const timestamp = (state, action) => {
  if (action.type === 'UPDATE_TIMESTAMP') {
    return new Date().toISOString();
  }
  return state;
}

// couldnt get combineReducers to work with remote-redux... womp
const reducer = (state, action) => ({
  counter: counter(state.counter, action),
  timestamp: timestamp(state.timestamp, action)
});

export { counter, timestamp, reducer };