import React from 'react'
import { View, Text } from 'react-native'

class ResultsScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>{this.props.score}</Text>
			</View>
		)
	}  
}
export default ResultsScreen