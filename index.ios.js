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
  TextInput,
  NavigatorIOS,
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

  onRightButtonPress (props) {
        this.refs.nav.push({
            title: 'From Right',
            component: DisplayPage
        });
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
          "Please Enter Your Headline Here then hit Next"
        </Text>
        <TextInput style={styles.TextInput} onChange={this.onType.bind(this)}/>
        <Text style={styles.instructions}>
          {this.state.searchString}
        </Text>
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
  render() {
    return (
      <React.NavigatorIOS
        style={styles.navContainer}
        initialRoute={{
          title: 'NewsFaker',
          component: SetupPage,
          rightButtonTitle: 'Next',
          onRightButtonPress: this.onRightButtonPress
        }}/>
    );
  }
}

AppRegistry.registerComponent('NewsFaker', () => NewsFaker);
