import { RECEIVE_USERS } from "../actions/users"
import { CREATE_QUESTION, SAVE_QUESTION } from '../actions/questions' 

export default function users (state={}, action){
    switch(action.type){
        case RECEIVE_USERS :
            return{
                ...state,
                ...action.users
            }
        case CREATE_QUESTION :
            return{
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        case SAVE_QUESTION :
            console.log(action)
            return{
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers:{
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default:
            return state
    }
}