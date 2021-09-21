import { _saveQuestion, _getQuestions } from '../utils/_DATA'
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const CREATE_QUESTION = "CREATE_QUESTION"

export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function getQuestions(){
    return (dispatch) => {
        return _getQuestions()
            .then(questions => dispatch(receiveQuestions(questions)))
    }
}

export function createQuestion(question){
    return{
        type: CREATE_QUESTION,
        question
    }
}

export function saveQuestion(question){
    return (dispatch) => {
        return _saveQuestion(question)
            .then(questionReturned => dispatch(createQuestion(questionReturned)))
    }
}