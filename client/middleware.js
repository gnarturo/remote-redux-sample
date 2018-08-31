const logger = store => next => action => {
  console.log('Dispatching: ', action)
  let result = next(action)
  console.log('State after dispatch:', store.getState())
  return result
}

export { logger }
