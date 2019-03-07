import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Decks from '../screens/Decks'
import AddDeck from '../screens/AddDeck'
import Deck from '../screens/Deck' 
import AddQuestion from '../screens/AddQuestion'
import Quiz from '../screens/Quiz'

const RootStack = createStackNavigator(
	{
	Decks: Decks,
	Deck: Deck,
	AddDeck:AddDeck,
	AddQuestion: AddQuestion,
	Quiz: Quiz,

	},
	{
		initialRouteName: "Decks",
    	defaultNavigationOptions: {
      		headerStyle: {
            
						backgroundColor: '#6200ee',
      },
      	headerTintColor: '#fff',
      	headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
	},

)



export default createAppContainer(RootStack)