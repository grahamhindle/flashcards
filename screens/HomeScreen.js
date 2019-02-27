import React from 'react'
import { View, Button,Text } from 'react-native'
import PropTypes from 'prop-types'


class HomeScreen extends React.Component {
	
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Home Screen</Text>
				<Button
					title="Go to Details"
					onPress={() => this.props.navigation.navigate('Details')}
				/>
			</View>
		)
	}
}

HomeScreen.propTypes={
	navigation: PropTypes.object,

}
export default HomeScreen