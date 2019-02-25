import { createAction } from "redux-actions"
import { GET_DECKS,ADD_DECK} from '../constants/actionTypes'

export const getDecks = createAction(GET_DECKS)
export const addDeck= createAction(ADD_DECK)

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

