import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Decks from '../screens/Decks'
import AddDeck from '../screens/AddDeck'
import Deck from '../screens/Deck' 
import AddQuestion from '../screens/AddQuestion'

const RootStack = createStackNavigator(
	{
	Decks: Decks,
	Deck: Deck,
	AddDeck:AddDeck,
	AddQuestion: AddQuestion,

	},
	{
		initialRouteName: "Decks",
    	defaultNavigationOptions: {
      		headerStyle: {
        	backgroundColor: '#2196f3',
      },
      	headerTintColor: '#fff',
      	headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
	},

)



export default createAppContainer(RootStack)