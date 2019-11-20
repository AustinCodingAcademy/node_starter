import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer.js'
import state from './state.js'

export default createStore(reducer, state, applyMiddleware(thunk))