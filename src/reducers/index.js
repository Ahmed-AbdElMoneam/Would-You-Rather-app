import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import setLoggedUser from './loggedInUser'
import storeId from './storeId'

export default combineReducers({
    users,
    questions,
    setLoggedUser,
    storeId
})