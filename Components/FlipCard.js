import React,{Component} from 'react'
import {Container, Card,CardItem, Body, Left, Text} from 'native-base'
import {Animated, StyleSheet,View, TouchableOpacity} from 'react-native'



class FlipCard extends Component {
  state = {
    textString: 'Show Answer'
  }
    componentWillMount(){
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

    render(){
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
                  <Text>{this.props.score}</Text>
                  <Text note>GeekyAnts</Text>
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
                <TouchableOpacity  onPress={this.props.correct}>
                  <Text>Correct ?</Text>
                </TouchableOpacity>
              </Left>
              <Body>
                <TouchableOpacity  onPress={() => this.flipCard()}>
                  <Text>{this.state.textString}</Text>
                </TouchableOpacity>
              </Body>
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
        height:300,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#bbdefb',
        backfaceVisibility: 'hidden'
    },
    flipCardBack: {
        
        
        backgroundColor: '#c5cae9',
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
        
        alignItems: 'center',
        backgroundColor: 'gray',
        color:'white',
        padding: 10,
        
      },
})

export default FlipCard