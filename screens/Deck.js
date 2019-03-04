import React from 'react'
import {Button, Image, StyleSheet,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {Container,
	Card, 
	CardItem,  
	Thumbnail,
	Icon,
	Header,
	Right,
	Body,
	Left, 
	Content, 
	Text} from 'native-base'
import _ from 'lodash'
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons'
const styles = StyleSheet.create({
	container: {
	  justifyContent: 'center',
	  paddingHorizontal: 10
	},
	button: {
	  alignItems: 'center',
	  backgroundColor: '#7c4dff',
	  padding: 10,
	  width:'100%',
	},
	countContainer: {
	  alignItems: 'center',
	  padding: 10
	},
	countText: {
	  color: '#FF00FF'
	}
})

class DeckScreen extends React.Component {
	
    static navigationOptions = ({ navigation }) => ({
		
		headerRight: (
			<Button
				onPress={() => navigation.navigate('AddQuestion',
				{deckId: navigation.getParam('deckId', "NO-ID"), deckName: navigation.getParam('deckName', "NO-ID")}
				)}
				title="Add Question"
				color="#fff"
		  />
		  ),	
		title: navigation.getParam('deckName', "NO-ID")
		})
		

		startQuiz=()=>{
			this.props.navigation.navigate('Quiz',
			{deckId: this.props.deck.id })
		}
	render() {
		
		
		const id = this.props.navigation.getParam('deckId', "NO-ID")
		const deck = this.props.deck
		const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png"
		return (
			<Container>
        
        <Content>
          <Card>
            <CardItem >
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>Flashcards</Text>
                  <Text note>{`There are ${deck.questions.length} questions in this deck`}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../images/card.jpg')} style={{height: 400, width: null, flex: 1}}/>
						</CardItem>
						


			<CardItem style={{width:'100%'}}>
			<TouchableOpacity
				style={styles.button}
         		onPress={this.startQuiz}
       		>
         		<Text style={{color:'white'}}> Start Quiz </Text>
       		</TouchableOpacity>
			
			
			</CardItem>
		  </Card>
		  
		</Content>
		
      </Container>
    )
	}  
}

const mapStateToProps = ({decks},ownProps)=> {
	
	const id = ownProps.navigation.getParam('deckId')
	
	return {
		
		deck: _.find(decks,x => x.id === id)
		
	}
}
export default connect(
	mapStateToProps,
	null,
)(DeckScreen )
