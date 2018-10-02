import React from 'react';
import {AppRegistry, Text, View} from 'react-native';
import { setInterval } from 'timers';

class Blink extends Component{
  constructor(props){
    super(props);
    this.state={isShowingText:true};
    setInterval(() =>{
      this.setState(previousState=>{
        return{isShowingText: !previousState.isShowingText};
      });
    }, 1000);
  }

  render(){
    let display=this.state.isShowingText ? this.props.text: '';
    return(
      <Text>{display}</Text>
    );
  }
}


export default class Basics extends Component{
  render(){
    return(
      <View>
        <Blink text='Lorem ipsum'></Blink>
        <Blink text='Lorem ipsum'></Blink>
        <Blink text='Lorem ipsum'></Blink>
        <Blink text='Lorem ipsum'></Blink>
      </View>
    );
  }
}
