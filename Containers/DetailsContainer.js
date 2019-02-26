import React from 'react'
import { connect } from 'react-redux'
import DetailsScreen from '../screens/DetailsScreen'
import { getDeckData } from '../actions/deckActions'


const DetailsContainer = props =>  <DetailsScreen  {...props} /> 

const mapStateToProps = ({decks})=> {
  return {
    decks: decks,
  }
}
export default connect(
  mapStateToProps,
  { getDeckData },
)(DetailsContainer);