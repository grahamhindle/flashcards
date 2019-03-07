import React from 'react'

import FlipCard from '../Components/FlipCard'
import { View,Card, Button,Container ,Icon, Text,DeckSwiper} from 'native-base'
import { TouchableOpacity, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import {selectQuestions , selectDeck} from '../Selectors/questionSelector'
import Results from '../screens/Results'

const styles = StyleSheet.create({
	button: {
		marginBottom: 30,
		width: 200,
		alignItems: 'center',
		backgroundColor: '#6200ee'
	},
	buttonText: {
		color: '#fff'
	}
})



class Quiz extends React.Component {
	state={correct: 0,
					wrong:0
	}
	static navigationOptions = ({ navigation }) => ({
		headerRight: (
			<Button
				onPress={() => navigation.navigate('Deck')}>
				<Text>Restart</Text>
				</Button>
			
		),
		title: navigation.getParam('deckId')
	})

	score = () => {
		return(
			<View>
				<Text>{this.state.correct}</Text>
			</View>
		)
	}
	
	updateScore = () => {
		
		this.setState((state) => {
			return {correct: state.correct + 1}
		})
}
	render() {
		
		const {questionSet} = this.props
		const num = questionSet.length
		const score = this.state.correct
		return (
				<Container>
					<DeckSwiper
					ref={(c) => this._deckSwiper = c}
					dataSource={questionSet}
					looping={false}
						renderEmpty={() =>
							<View style={{ alignSelf: "center" }}>
								<Text>All Questions completed</Text>
								<Text>Press Restart to take test again</Text>
								<Text>{`You scored ${this.state.correct}`}</Text>
							</View>
						}
						renderItem={item =>
						<FlipCard key={item.id}
						front={item.questionText}
						back={item.answerText}
						number={num}
						score={score}
						correct={this.updateScore}>
						</FlipCard>
						
						}
						/>
						<View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
					<Button  color='#6200ee' iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
						<Icon name="arrow-back" />
						<Text>Swipe Left</Text>
					</Button>
					<Button color='#6200ee'
						iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
						<Text>Swipe Right</Text>
						<Icon name="arrow-forward" />
					</Button>
				</View>
				</Container>
		)
	}  
}
const mapStateToProps = (state,ownProps)=> {
	const id = ownProps.navigation.getParam('deckId')
	console.log('id', id)
	return {
		questionSet: selectQuestions(state,id)	

	}
}
export default connect(
	mapStateToProps,
	null,
)(Quiz)

