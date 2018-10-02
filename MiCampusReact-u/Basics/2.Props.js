import React from 'react';
import {Text, View} from 'react-native';

class Greeting extends Component{
  render(){
    return(
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class LotsOfGreetings extends Component{
  render(){
    return(
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar'></Greeting>
        <Greeting name='Ozai'></Greeting>
        <Greeting name='Ultra-Lord'></Greeting>
      </View>
    );
  }
}
