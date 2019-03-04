import React from 'react'
import { Image,  } from 'react-native'
import {
	Card, 
	CardItem,  
	} from 'native-base'

const StartupImage = (props) =>(

    <Card style = {{marginTop:20}}>
        <CardItem cardBody>
            <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
    </Card>
)
            
export default StartupImage