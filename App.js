import React, { Component } from 'react';
import { Platform } from 'react-native';
import NewDeck from './screens/NewDeck'
import NewQuestion from './screens/NewQuestion'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (<NewQuestion />);
  }
}
