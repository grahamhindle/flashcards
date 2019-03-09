import React from 'react'
import PropTypes from 'prop-types'
import {Button , StyleSheet} from 'react-native'
import { StyleProvider, Container, Icon, Left,Right,  Content, List,  ListItem, Text } from 'native-base'
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { getDeckData } from '../actions/deckActions'
import { getQuestionData} from '../actions/questionActions'

const styles = StyleSheet.create({
	button: {
		marginBottom: 50,
		width: 50,
		alignItems: 'center',
		backgroundColor: '#6200ee'
	},
	buttonText: {
		color: '#fff'
	}
})




class Decks extends React.Component {
	static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Decks',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('AddDeck')}
          title="Add"
          color="#fff"
        />
      ),
    };
  };
	
	async componentDidMount(){
		await Font.loadAsync({
			'Roboto': require('native-base/Fonts/Roboto.ttf'),
			'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font,
		});
		this.props.getDeckData()
		this.props.getQuestionData()
	}
	render() {
		const {decks} = this.props
		
		return (
		 
			<Container >
			
				<Content >
					<List dataArray={decks}
						renderRow={(data)=>
							<ListItem
								noIndent 
								key={data.id}
								
							>
							<Left>
								<Text >{data.name} </Text>
							</Left>
						<Text>{data.questions !== 'undefined' ?`${data.questions.length} questions`: 'no questions'}</Text>
							<Right>
							<Button rounded style={StyleSheet.button}
							onPress={() => 
								this.props.navigation.navigate('Deck',
							{deckId: data.id, deckName: data.name})
							}
							title='View'
							color="#6200ee">
						
						</Button>
							</Right>
							</ListItem>}>
					</List>
				</Content>
				
			</Container>
			
			
		)
	}
}    
	
Decks.propTypes = {
	getDeckData: PropTypes.func,
	decks: PropTypes.object,
	data:PropTypes.object

}
const mapStateToProps = ({decks})=> {
	return {
		decks: decks,
		
	}
}
export default connect(
	mapStateToProps,
	{ getDeckData,
		getQuestionData },
)(Decks)

