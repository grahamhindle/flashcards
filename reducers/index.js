import { combineReducers } from 'redux'
import decks from './decks'
import questions from './questions'

const rootReducer =  combineReducers({
  decks,
  questions
})

export default rootReducer