export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER"

export const loggedInUser = "tylermcginnis"

export function setLoggedUser(id){
    return{
        type: SET_LOGGED_IN_USER,
        id
    }
}