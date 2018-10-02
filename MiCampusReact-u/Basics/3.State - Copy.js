import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class Basics extends Component{
  render(){
    return(
      <View>
        <Text style={styles.addBlue}>'Lorem ipsum'></Text>
        <Text style={styles.addBlue}>'Lorem ipsum'></Text>
        <Text style={styles.addRed}>'Lorem ipsum'></Text>
        <Text style={styles.addRed}>'Lorem ipsum'></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addBlue:{
    color:'blue',
    fontWeight:'italic',
    fontSize:35,
  },
  addRed:{
    color: 'red',
    fontWeight: 'bold',
  },
});