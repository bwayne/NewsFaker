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
    this.nextPage = this.nextPage.bind(this)
    this.state = {
      searchString: ''
    }
  }

  onType(e) {
    this.setState({searchString: e.nativeEvent.text})
  }

  nextPage(e) {
    if (this.state.searchString.length > 0) {
      this.props.navigator.push({
          title: 'From Right',
          component: DisplayPage,
          passProps: {inputString: this.state.searchString}

      });
    } else {
      alert("Please Enter Something")
    }
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
        <Button
          style={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={this.nextPage}
        >
          Next
        </Button>
      </View>
    );
  }
}

class DisplayPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          "You Entered the Following"
        </Text>
        <Text style={styles.instructions}>
          {this.props.inputString}
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
      },
      displayPage: {
        title: 'Display',
        component: DisplayPage
      }
    }
  }

  onRightButtonPress (props) {
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



AppRegistry.registerComponent('NewsFaker', () => NewsFaker);
