import React from 'react'
import { TextInput} from 'react-native'
import { connect } from 'react-redux'
import {Container,Button,Form, TextArea, Input,Content, Text} from 'native-base'
import _ from 'lodash'
import StartupImage from '../Components/StartupImage'
import {saveNewQuestion} from  '../actions'

class AddQuestion extends React.Component {
	state = { 
		questionText: '',
		answerText: ''
	}
				
	static navigationOptions = ({ navigation }) => ({
		title: navigation.getParam('deckName', 'Flash cards')
	})
		
	handleNewQuestion =() => {
		//get state
		const { questionText, answerText } = this.state
		const id = this.props.deck.id
		
	
		//message success
		this.props.saveNewQuestion(questionText, answerText,id)
		this.setState(() => ({ 
			questionText: '',
			answerText : ''
		}))
	}
	render() {
		console.log('add q',this.props)
		return (
			<Container> 
				<Content>
				<StartupImage/>
				<Form>
					<TextInput style={{height: 120, fontSize:24,borderColor: 'gray', borderWidth: 2}}
						id='questionName'
						multiline = {true}
         		numberOfLines = {4}
						placeholder="Enter new Question"
						onChangeText={(questionText) => this.setState({questionText})}
						value={this.state.questionText}> 
					</TextInput>
					<TextInput style={{height: 120,fontSize:24, borderColor: 'gray', borderWidth: 2}}
						id='answerName'
						multiline = {true}
         		numberOfLines = {4}
						placeholder="Enter the Answer"
						onChangeText={(answerText) => this.setState({answerText})}
						value={this.state.answerText}> 
					</TextInput>
					<Button 
						full 
						onPress= {this.handleNewQuestion}>
						<Text>Submit</Text>
					</Button>
				</Form>
			</Content> 
		</Container>
		)
	}
}

const mapStateToProps = (state,ownProps)=> {
	
	const id = ownProps.navigation.getParam('deckId')
	
	return {
		
		deck: _.find(state.decks,x => x.id === id)
		
	}
}
export default connect(
	mapStateToProps,
	{saveNewQuestion},
)(AddQuestion )


