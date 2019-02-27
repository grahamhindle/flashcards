import { combineReducers } from 'redux'
import decks from '../reducers/decks'



const rootReducer =  combineReducers({
	decks,
})

export default rootReducer