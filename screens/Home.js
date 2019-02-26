import React from "react";
import { Button,View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class HomeScreen extends React.Component {
  handleAction = ()=> {
    
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress ={this.handleAction}
        />
      </View>
    );
  }
}