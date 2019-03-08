import React from 'react'
import { TextInput,View} from 'react-native'
import { connect } from 'react-redux'
import {Container,Item, Button,Form, TextArea, Input,Content, Text} from 'native-base'
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
		
		return (
			<Container> 
				<Content>
				<StartupImage  />
				<Form style={{marginTop:50}}>
					<Item rounded>
					<Input
						id='questionName'
         				numberOfLines = {1}
						placeholder="Enter new Question"
						onChangeText={(questionText) => this.setState({questionText})}
						value={this.state.questionText}> 
					</Input>
					</Item>
					
					<Item rounded style={{marginTop:20}}>
					<Input 
						id='answerName'
         				numberOfLines = {1}
						placeholder="Enter the Answer"
						onChangeText={(answerText) => this.setState({answerText})}
						value={this.state.answerText}> 
					</Input>
					
					</Item>
					<Button style={{marginTop:50}}
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


