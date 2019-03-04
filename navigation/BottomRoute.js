import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Decks from '../screens/Decks'
import AddDeck from '../screens/AddDeck'
import Deck from '../screens/Deck' 
import AddQuestion from '../screens/AddQuestion'
import Quiz from '../screens/Quiz'

import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

const BottomRoute = (props) => (<BottomTabBar {...props} />);

const TabScreens = createBottomTabNavigator(
  {
    tabBarComponent: props =>
      <TabBarComponent
        {...props}
        style={{ borderTopColor: '#605F60' }}
      />,
  },
);