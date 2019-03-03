import { createAction } from 'redux-actions'
import { ADD_QUESTION,GET_QUESTIONS} from '../constants/actionTypes'
import { _getQuestions} from '../utils/_data'
import { apiStart, apiEnd } from '../actions/apiActions'



export const getQuestions=createAction(GET_QUESTIONS)
export const addQuestion= createAction(ADD_QUESTION)

export function getQuestionData() {
	return (dispatch) => {
		return _getQuestions()
			.then((questions) => {
                dispatch(apiStart('GET_QUESTIONS'))
				dispatch(getQuestions(questions))
				dispatch(apiEnd('GET_QUESTIONS'))
			
			})
	}
}