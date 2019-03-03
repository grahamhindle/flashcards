import React from 'react'
import { View, Text, Button } from 'react-native'
import FlipCard from '../Components/FlipCard'
import {connect} from 'react-redux'

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
		console.log('quiz',this.props.questionSet)
		const {questionSet} = this.props
		return (
						<View style={{ flex: 1, alignItems: 'center', justifyContent: 					'center' }}>
								{questionSet.map(x => 
									<FlipCard id={x}
									front={`front ${x}`}>
                </FlipCard>
									)}
                
						</View>
		)
	}  
}
const mapStateToProps = (state,ownProps)=> {
	const id = ownProps.navigation.getParam('deckId')
	console.log('id', id)
	return {
		questionSet: state.decks[id].questions

		
	}
}
export default connect(
	mapStateToProps,
	null,
)(Quiz)

