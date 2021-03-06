import React from 'react'
import { connect } from 'react-redux'
import Decks from '../screens/Decks'
import { getDeckData } from '../actions/deckActions'


const DecksContainer = props =>  <Decks {...props}/> 

const mapStateToProps = ({decks})=> {
	return {
		decks: decks,
		
	}
}
export default connect(
	mapStateToProps,
	{ getDeckData },
)(DecksContainer)