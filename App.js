import React from 'react'
import {  Text } from 'react-native'
import store from './store'
import { Provider } from 'react-redux'
import RootStack from './navigation/RootStack'
import {StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'


export default class App extends React.Component {
	
	render() {
		return (
			<StyleProvider style={getTheme(material)}>
			<Provider store={store}>
				
				<RootStack/>
			</Provider>
			</StyleProvider>
		)
	}  
}


