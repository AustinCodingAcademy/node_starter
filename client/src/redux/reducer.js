import { combineReducers } from 'redux'

const user = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.value
        default:
            return state
    }
}

export default combineReducers({ user })