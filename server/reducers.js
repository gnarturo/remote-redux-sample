const counter = (state, action) => {
  return state + 5;
}

const reducer = (state, action) => ({
  counter: counter(state.counter),
  timestamp: null
})

export { counter, reducer }