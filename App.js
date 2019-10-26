import React, { Component } from 'react';
import { Platform } from 'react-native';
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import IndividualDeck from './components/IndividualDeck';
import Quiz from './components/Quiz';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    // return (<DeckList />);
    // return (<NewDeck />);
    // return (<NewQuestion deckId='React'/>);
    // return (<IndividualDeck deckId='React' title='React' cards={2} />);
    return (<Quiz deckId='React' title='React' cards={2} />);
  }
}
