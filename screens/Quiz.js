import React from 'react'

import FlipCard from '../Components/FlipCard'
import { View,Card, Container ,Button,Icon, Text,DeckSwiper} from 'native-base'
import {connect} from 'react-redux'
import {selectQuestions , selectDeck} from '../Selectors/questionSelector'

class Quiz extends React.Component {
    static navigationOptions = ({ navigation }) => ({
		headerRight: (
			<Button
			onPress={() => navigation.navigate('AddQuestion')}
			title="Restart"
			color="#fff"
		  />
			),
			
		
		title: navigation.getParam('deckId')
	
	  })
	render() {
		
		const {questionSet} = this.props
		const num = questionSet.length
		return (
				<Container>
					<DeckSwiper
					ref={(c) => this._deckSwiper = c}
					dataSource={questionSet}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>
						}
						renderItem={item =>
						<FlipCard key={item.id}
						front={item.questionText}
						back={item.answerText}>
						number={questionSet.length}
						</FlipCard>
						
						}
						/>
						<View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Icon name="arrow-forward" />
            <Text>Swipe Right</Text>
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

