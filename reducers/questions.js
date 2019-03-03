import { handleActions } from 'redux-actions'

import { ADD_QUESTION,GET_QUESTIONS} from '../constants/actionTypes'

const questions = handleActions(
  {
  [GET_QUESTIONS]:(state ,action) => action.payload,
  [ADD_QUESTION]: (state,action) => {
    return{
      ...state,
      [action.payload.formattedquestion.id]: action.payload.formattedquestion
    }
  },
    
  },  
  {}
)
export default questions