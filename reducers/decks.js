import { handleActions } from 'redux-actions'

import { GET_DECKS,ADD_DECK } from '../constants/actionTypes'




const decks = handleActions(
  {
  
  
  [GET_DECKS]:(state ,action) => action.payload,

  [ADD_DECK]: (state,action) => state

  },
  {}
)
export default decks