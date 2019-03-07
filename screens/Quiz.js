import React from 'react'

import FlipCard from '../Components/FlipCard'
import { View,Card, Container ,Icon, Text,DeckSwiper} from 'native-base'
import { Button,TouchableOpacity, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import {selectQuestions , selectDeck} from '../Selectors/questionSelector'
import Results from '../screens/Results'

const styles = StyleSheet.create({
	button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})



class Quiz extends React.Component {
	state={correct: 0,
					wrong:0
	}
	static navigationOptions = ({ navigation }) => ({
		headerRight: (
			<Button
				onPress={() => navigation.navigate('Deck')}
				title="Restart"
				color="#fff"
			/>
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
			return {correct: state.correct + 1};
		});
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
									<Results
										numQ = {num}
										score={score}
									/>
              </View>
						}
						renderItem={item =>
						<FlipCard key={item.id}
						front={item.questionText}
						back={item.answerText}>
						number={num}
						score={score}
						correct={this.props.updateScore}
						</FlipCard>
						
						}
						/>
						<View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <TouchableOpacity title="Swipe Left" iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </TouchableOpacity>
          <TouchableOpacity 
					iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Icon name="arrow-forward" />
            <Text>Swipe Right</Text>
          </TouchableOpacity>
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

