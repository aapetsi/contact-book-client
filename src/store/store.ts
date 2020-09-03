import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import contactsReducer from './reducers/contactsReducer'

const rootReducer = combineReducers({
  contacts: contactsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE ||compose

const reduxStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}

export default reduxStore