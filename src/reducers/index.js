import { combineReducers } from 'redux'
import loggedInUser from './loggedInUser/loggedInUser'
import showOverlay from './showOverlay/showOverlay'

const rootReducer = combineReducers({
  loggedInUser,
  showOverlay
})

export default rootReducer
