import React,{Component} from 'react'
import {Container, Segment, Header, Text,Button,Content} from 'native-base'
import {Animated, StyleSheet,View, TouchableOpacity} from 'react-native'
import Item from '../native-base-theme/components/Item';

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
            <View>
            <TouchableOpacity style= {styles.button} onPress={() => this.flipCard()}>
                <Text>Show Answer</Text>
              </TouchableOpacity>
            </View>
          </Container>
          
          
          
            

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems:'center',
        fontSize:40
      },
    flipCard:{
        width:400,
        height:600,
        marginTop: '10%',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        borderStyle: 'solid',
        borderColor: 'blue',
        borderWidth: 2,
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
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width:'100%',
      },
})

export default FlipCard