import {combineReducers} from 'redux'
import {userReducer} from './useReducer'

const reducers = combineReducers({
    allrates: userReducer,
})

export default reducers