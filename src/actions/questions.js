import {  _saveQuestionAnswer, _getQuestions, _saveQuestion } from '../utils/_DATA'
export const SAVE_QUESTION = "SAVE_QUESTION"
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const CREATE_QUESTION = "CREATE_QUESTION"

export function storedQuestion({ authedUser, qid, answer }){
    return{
        type: SAVE_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export function storeQuestion(answer){
    return (dispatch, getState) => {
        const { setLoggedUser, storeId } = getState()
        return _saveQuestionAnswer({
            authedUser: setLoggedUser,
            qid: storeId,
            answer
        })
            .then(() => dispatch(storedQuestion({ authedUser: setLoggedUser, qid: storeId, answer })))
    }
}

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