import React,{Component} from 'react'
import {Container, Button, Card,CardItem, Body, Left,Right, Text} from 'native-base'
import {Animated, StyleSheet,View, TouchableOpacity} from 'react-native'




class FlipCard extends Component {
  state = {
    textString: 'Show Answer',
    toggle: true
  }
    componentWillMount(){
      this.setState((state) => {
        return {toggle: true }
      })
        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({ value }) => {
        this.value = value;
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
          })
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0,180],
            outputRange:['180deg','360deg']
        })
    }

    flipCard = () => {
      
        if (this.value >= 90) {
            this.setState({textString :'Show Answer'})
            Animated.timing(this.animatedValue,{
              toValue: 0,
              duration:700,
              
              
            }).start();
          } else {
            this.setState({textString :'Show Question'})
            Animated.timing(this.animatedValue,{
              toValue: 180,
              duration:700
            }).start();
          }
      
    }

    correct=()=>{
      //set toggle state to not show button
      this.setState((state) => {
        return {toggle: false }
      })
      this.props.correct()
    }
    
    render(){
      console.log('props',this.props)
        const frontAnimatedStyle = {
            transform: [
                { rotateY: this.frontInterpolate}
            ]
        }

        const backAnimatedStyle = {
            transform: [
                { rotateY: this.backInterpolate}
            ]
        }
        
        
        return (
          <Card >
            <CardItem>
              <Left>
                <Body>
                  <Text >{`There are ${this.props.number} questions in this deck`}</Text>
                  <Text>{`Score on this Deck: ${this.props.score}`}</Text>
                </Body>
              </Left>
            </CardItem>
              <CardItem style={[styles.flipCard]}>
               
              <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
                <Text style={styles.flipText}>
                  {this.props.front}
                </Text>
              </Animated.View>
              <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
                <Text style={styles.flipText}>
                  {this.props.back}
                </Text>
              </Animated.View>
            </CardItem>
            <CardItem>
              <Left>
              { this.state.toggle ? 
                <Button small style={{backgroundColor:'#6200ee'}} onPress={()=>this.correct()}>
                  <Text>Correct ?</Text>
                </Button>
                : null}
              </Left>
              
              <Right>
                <Button small style={{backgroundColor:'#6200ee'}}  onPress={() => this.flipCard()}>
                  <Text>{this.state.textString}</Text>
                </Button>
              </Right>
            </CardItem>
            </Card>
          
          
          
          
            

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:'center',
        fontSize:40
      },
     
    flipCard:{
        flex:1,
        width:400,
        height:500,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        backfaceVisibility: 'hidden'
    },
    flipCardBack: {
        
        
        backgroundColor: '#bb86fc',
        position: 'absolute',
        top:0
    },
    flipText: {
        
        width: 100,
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        
      },
      button: {
        width: 50,
        height: 25,
        alignItems: 'center',
        backgroundColor: '#6200ee',
        color:'#fff',
        padding: 10,
        
      },
})

export default FlipCard