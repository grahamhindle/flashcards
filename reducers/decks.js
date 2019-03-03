import { handleActions } from 'redux-actions'
import produce from 'immer'
import _ from 'lodash'
import { GET_DECKS,ADD_DECK,ADD_DECK_QUESTION } from '../constants/actionTypes'

const decks = handleActions(
  {

  [GET_DECKS]:(state ,action) => action.payload,
  [ADD_DECK]: (state,action) => 
  {
    return{
      ...state,
      [action.payload.id]: action.payload
    }
  },
  [ADD_DECK_QUESTION]:(state,action) => {
      const {formattedquestion, id} = action.payload
      const deck=state[id]
      return{
      ...state,
      [id]:{
        ...deck,
        questions: deck.questions.concat(formattedquestion.id)   
      }
    }
  }
  },  
  {},
)
export default decks