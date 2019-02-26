import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from '../screens/HomeScreen'
import DetailsContainer from '../Containers/DetailsContainer'



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsContainer,
  },
  {
    initialRouteName: 'Home',
  }
);



export default RootStack