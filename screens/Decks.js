import React from 'react'
import PropTypes from 'prop-types'
import { Container,  Button, Content, List,  ListItem, Text } from 'native-base'
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';


class Decks extends React.Component {
	async componentDidMount(){
		await Font.loadAsync({
			'Roboto': require('native-base/Fonts/Roboto.ttf'),
			'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font,
		});
		this.props.getDeckData()
	}
	render() {
		const {decks} = this.props
		
		return (
			<Container>
				
				<Content>
					<List dataArray={decks}
						renderRow={(data)=>
							<ListItem
								noIndent 
								key={data.id}
								
							>
								<Text>{data.name}</Text>
							</ListItem>}>
					</List>
				</Content>
				<Button>
            <Text>Click Me!</Text>
          </Button>
			</Container>
			
		)
	}
}    
	
Decks.propTypes = {
	getDeckData: PropTypes.func,
	decks: PropTypes.object,
	data:PropTypes.object

}

export default Decks