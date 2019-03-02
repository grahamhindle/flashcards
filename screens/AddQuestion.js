import React from 'react'

import { connect } from 'react-redux'
import {Container,Button,Header,Body,Title, Icon,Left, Right,Content, Text} from 'native-base'
import _ from 'lodash'
class AddQuestion extends React.Component {
    static navigationOptions = ({ navigation }) => ({
		title: "Add Question"
	  })
	render() {
		return (
			<Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Add QuestionScreen</Text>
			</Container>
		)
	}  
}
export default AddQuestion