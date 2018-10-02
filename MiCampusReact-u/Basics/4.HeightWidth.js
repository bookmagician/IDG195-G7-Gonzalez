import React from 'react';
import {AppRegistry, View} from 'react-native';

export default class FixedDimensionsBasics extends Component{
  render(){
    return(
      <View>
        <View style={{width:50, height:50, backgroundColor:'lightblue'}}></View>
        <View style={{width:100, height:100, backgroundColor:'blue'}}></View>
        <View style={{width:150, height:150, backgroundColor:'darkblue'}}></View>
      </View>
    );
  }
}
