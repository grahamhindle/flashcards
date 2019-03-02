import React from 'react'
import { connect } from 'react-redux'
import Deck from '../screens/Deck'
import { getDeckData } from '../actions/deckActions'


const DeckContainer = props =>  <Deck {...props}/> 

const mapStateToProps = ({Deck})=> {
	return {
		Deck: Deck,
	}
}
export default connect(
	mapStateToProps,
	{ getDeckData },
)(DeckContainer)