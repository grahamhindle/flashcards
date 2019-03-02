import React, { Component } from 'react'
import { Container, Right, Icon,Text,  Button, Content, Form, Item, Input } from 'native-base'
import {connect} from 'react-redux'
import { addNewDeck } from '../actions/deckActions'

class AddDeck extends Component {
  state = { deck: '' }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Add New Deck',
    }
  }

  handleNewDeck =() => {
    //get state
    const { deck } = this.state
    alert(deck)
    //message success
    this.props.addNewDeck(deck)
    this.setState(() => ({ 
      deck: ''
    }))
  }

  render() {
    return (
      <Container> 
        <Content>
          <Form>
            <Item last>
              <Input 
              id='deckName'
              placeholder="Deck Name"
              onChangeText={(deck) => this.setState({deck})}
              value={this.state.deck}> 
            </Input>
            </Item>
          </Form>
          <Button 
          full 
          onPress= {this.handleNewDeck}>
          <Text>Submit</Text>
        </Button >
        </Content>
       
      </Container>
    )
  }
}

export default connect(
	null,
	{ addNewDeck },
)(AddDeck)



