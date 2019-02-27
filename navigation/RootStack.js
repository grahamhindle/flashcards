import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import DetailsContainer from '../Containers/DecksContainer'
import { Icon } from 'native-base'


const RootStack = createBottomTabNavigator(
	{
		Home: HomeScreen,
		Details: DetailsContainer,
	},

	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused,  tintColor }) => {
				const { routeName } = navigation.state
				let IconComponent = Icon
				let iconName
				if (routeName === 'Home') {
					iconName = `ios-information-circle${focused ? '' : '-outline'}`
				} else if (routeName === 'Settings') {
					iconName = `ios-options${focused ? '' : '-outline'}`
				}
				// You can return any component that you like here!
				return <IconComponent name={iconName} size={25} color={tintColor} />
			},
		}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		},
	}
)



export default createAppContainer(RootStack)