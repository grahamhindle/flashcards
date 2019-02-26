import React from 'react'
import _ from 'lodash'

import { Container, Header, Content, List, Icon, Left,Right, ListItem, Text } from 'native-base'

class DetailsScreen extends React.Component {
  componentDidMount(){
    this.props.getDeckData()
  }
  render() {
    const {decks} = this.props
    console.log
    return (
      <Container>
        <Header />
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
      </Container>
    )
  }
}    
  

export default DetailsScreen