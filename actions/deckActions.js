import { createAction } from 'redux-actions'
import { GET_DECKS,ADD_DECK,ADD_DECK_QUESTION} from '../constants/actionTypes'
import {apiStart,apiEnd} from '../actions/apiActions'
import {_getDecks, _addDeck } from '../utils/_data'

export const getDecks = createAction(GET_DECKS)
export const addDeck= createAction(ADD_DECK)
export const addDeckQuestion = createAction(ADD_DECK_QUESTION)

export function getDeckData() {
	return (dispatch) => {
		return _getDecks()
			.then((decks) => {
				dispatch(apiStart('GET_DECKS'))
				dispatch(getDecks(decks))
				dispatch(apiEnd('GET_DECKS'))
			
			})
	}
}



export function addNewDeck(deckName) {
	
	return (dispatch) => {
		return _addDeck (deckName)
        .then((formattedDeck) => {
		dispatch(apiStart('ADD_DECK'))
		dispatch(addDeck(formattedDeck))
		dispatch(apiEnd('ADD_DECK'))
		})
	}
}

