import { combineReducers } from 'redux'
import loggedInUser from './loggedInUser/loggedInUser'

const rootReducer = combineReducers({
  loggedInUser
})

export default rootReducer
