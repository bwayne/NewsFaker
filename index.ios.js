/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    borderWidth: 1
  }
});

AppRegistry.registerComponent('NewsFaker', () => NewsFaker);
