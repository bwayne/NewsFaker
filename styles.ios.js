'use strict';
import React, {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center'
  },
  navContainer: {
    // flexDirection: 'column'
    flex: 1
  },
  buttonContainer: {
    padding:10, 
    height:45, 
    overflow:'hidden', 
    borderRadius:4, 
    backgroundColor: 'white'
  },
  button: {
    fontSize: 20,
    color: 'green'
  }
});

module.exports = styles