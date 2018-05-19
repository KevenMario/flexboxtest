import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component
 {
  render() 
  {
    return (
      <View style={styles.container}>
          <View style={styles.b1}/>
          <View style={styles.b1}/>
          <View style={styles.b1}/>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
  container: 
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  b1:
  {
    flex : 1,
    backgroundColor : 'steelblue'
  },
  b2:
  {
    backgroundColor : 'gray'
  },
  b3:
  {
    backgroundColor : 'yellow'
  }
});
