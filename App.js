import React from 'react'
import {  Text } from 'react-native'
import store from './store'
import { Provider } from 'react-redux'
import RootStack from './navigation/RootStack'




export default class App extends React.Component {
	
	render() {
		return (
			<Provider store={store}>
				<Text>Home Screen</Text>
				<RootStack/>
			</Provider>
		)
	}  
}


