import React from 'react'
import { Image,  } from 'react-native'
import {
	Card, 
	CardItem,  
	} from 'native-base'

const StartupImage = (props) =>(

    <Card style = {{marginTop:20}}>
        <CardItem cardBody>
            <Image source={require('../images/flashcard.jpg')} style={{height: 250, width: null, flex: 1}}/>
        </CardItem>
    </Card>
)
            
export default StartupImage