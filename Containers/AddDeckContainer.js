import { AddDeckData } from '../actions/deckActions'


const AddDeckContainer = props =>  <AddDeck {...props}/> 

const mapStateToProps = ({decks})=> {
	return {
		decks: decks,
	}
}
export default connect(
	mapStateToProps,
	{ addDeckData },
)(AddDeckContainer)