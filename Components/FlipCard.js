import React,{Component} from 'react'
import {Container,Text,Content} from 'native-base'
import {Animated, StyleSheet,View, TouchableOpacity} from 'react-native'

class FlipCard extends Component {
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
            Animated.timing(this.animatedValue,{
              toValue: 0,
              duration:700,
              
              
            }).start();
          } else {
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
          <View>
          <TouchableOpacity style= {styles.button} onPress={() => this.flipCard()}>
              <Text>Show Answer</Text>

            </TouchableOpacity>
            <Container style={styles.container}>
            <View>
              <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
                <Text style={styles.flipText}>
                  {this.props.front}
                </Text>
              </Animated.View>
              <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
                <Text style={styles.flipText}>
                  This text is your Answer
                </Text>
                
              </Animated.View>
              
            </View>
           
          </Container>
          
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        fontSize:40
      },
    flipCard:{
        width:400,
        height:300,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        borderStyle: 'solid',
        borderColor: 'blue',
        borderWidth: 5,
        borderRadius: 25,
        backfaceVisibility: 'hidden'
    },
    flipCardBack: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0
    },
    flipText: {
        width: 90,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width:200,
      },
})

export default FlipCard