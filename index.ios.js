/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var styles = require('./styles.ios.js')

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  Button,
  View,
  TextInput
} from 'react-native';

var compositions = [{
  headline:     "Cold Dive into React Native: A Beginner's Tutorial",
  image:        "image.png"
}]

class NewsFaker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: 'This is the search string'
    }
  }
  onType(e) {
    this.setState({searchString: e.nativeEvent.text})
  }
  render() {
    var composition = compositions[0];
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {composition.headline}
        </Text>
        <Text style={styles.instructions}>
          "Type something here"
        </Text>
        <TextInput style={styles.TextInput} onChange={this.onType.bind(this)}/>
        <Text style={styles.instructions}>
        {this.state.searchString}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('NewsFaker', () => NewsFaker);
