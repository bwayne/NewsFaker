/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var styles = require('./styles.ios.js')
var Button = require('react-native-button');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  NavigatorIOS,
  TouchableHighlight,
} from 'react-native';

var compositions = [{
  headline:     "Welcome to NewsFaker",
  image:        "image.png"
}]

class SetupPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchString: 'Fill in Headline'
    }
  }
  onType(e) {
    this.setState({searchString: e.nativeEvent.text})
  }

  nextScreen() {

  }

  render() {
    var composition = compositions[0];
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {composition.headline}
        </Text>
        <Text style={styles.instructions}>
          Enter Your Headline Below Then Hit Next
        </Text>
        <TextInput style={styles.TextInput} onChange={this.onType.bind(this)}/>
        <Text style={styles.instructions}>
          {this.state.searchString}
        </Text>
        <NextButton
          onPress={this._handlePress}>
        </NextButton>
      </View>
    );
  }
}

class DisplayPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          "You Entered the Following"
        </Text>
        <Text style={styles.instructions}>
          {this.state.searchString}
        </Text>
      </View>
    );
  }
}

class NewsFaker extends Component {

  constructor(props){
    super(props);
    this.onRightButtonPress = this.onRightButtonPress.bind(this)
    this.routes = {
      setupPage: {
        title: 'NewsFaker',
        component: SetupPage,
        rightButtonTitle: 'Next',
        onRightButtonPress: this.onRightButtonPress
      }
    }
  }

  onRightButtonPress (props) {
    debugger
    console.log(this);
    this.refs.nav.push({
        title: 'From Right',
        component: DisplayPage
    });
  }

  render() {
    return (
      <React.NavigatorIOS
        style={styles.navContainer}
        ref='nav'
        initialRoute={this.routes.setupPage}/>
    );
  }
}

var NextButton = React.createClass({
  render() {
    return (
      <Button
        style={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={this._handlePress}
      >
        Next
      </Button>
    );
  },

  _handlePress(event) {
    console.log('Pressed!');
  },
});


AppRegistry.registerComponent('NewsFaker', () => NewsFaker);
