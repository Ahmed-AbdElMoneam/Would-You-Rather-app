import { SET_LOGGED_IN_USER } from '../actions/loggedInUser'

export default function setLoggedUser (state = null, action) {
    switch (action.type) {
        case SET_LOGGED_IN_USER :
            return action.id
        default :
            return state
    }
}