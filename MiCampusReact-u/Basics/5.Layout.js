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
export default class JustifiedDimesnions extends Component{
  render(){
    return(
      <View style={{
        flex:1,
        flexDirection: 'column',
        justifyContent:'space-between',
      }}></View>
      <View>
        <View style={{width:50, height:50, backgroundColor:'lightblue'}}></View>
        <View style={{width:100, height:100, backgroundColor:'blue'}}></View>
        <View style={{width:150, height:150, backgroundColor:'darkblue'}}></View>
      </View>
    );
  }
};

export default class AlignedDimesnions extends Component{
  render(){
    return(
      <View style={{
        flex:1,
        flexDirection: 'column',
        justifyContent:'space-between',
        alignItems:"stretch"
      }}></View>
      <View>
        <View style={{width:50, height:50, backgroundColor:'lightblue'}}></View>
        <View style={{width:100, height:100, backgroundColor:'blue'}}></View>
        <View style={{width:150, height:150, backgroundColor:'darkblue'}}></View>
      </View>
    );
  }
};

