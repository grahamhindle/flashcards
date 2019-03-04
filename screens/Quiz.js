import React from 'react'
import {  Button } from 'react-native'
import FlipCard from '../Components/FlipCard'
import { View,Container , Text,DeckSwiper} from 'native-base'
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
		return (
				
								<DeckSwiper
									dataSource={questionSet}
									renderItem={item =>
									<FlipCard key={item.id}
									front={`front ${item.questionText}`}>
                	</FlipCard>
									}
									/>
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

