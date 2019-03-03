
import {formatNewQuestion} from '../utils/_data'
import { addQuestion }from './questionActions'
import {addDeckQuestion} from '../actions/deckActions'
import {apiStart,apiEnd} from '../actions/apiActions'






export function saveNewQuestion(questionText,answerText,id) {
	
	return (dispatch) => {
		const formattedquestion = formatNewQuestion (questionText,answerText)
		dispatch(apiStart('ADD_QUESTION'))
		dispatch(addQuestion({formattedquestion}))
		dispatch(addDeckQuestion({formattedquestion, id}))
		dispatch(apiEnd('ADD_QUESTION'))
	}
}