import React from "react";
import { View, Text } from "react-native";
import store from './store'
import { Provider } from 'react-redux';
import RootStack from './navigation/RootStack'
import { createAppContainer } from 'react-navigation'

const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <Text>Home Screen</Text>
        <AppContainer/>
      </Provider>
    );
  }  
}


