import React, { Component } from 'react';
import { Platform } from 'react-native';
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import IndividualDeck from './components/IndividualDeck';
import Quiz from './components/Quiz';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

const TabNav = createMaterialTopTabNavigator({
  Decks: { screen: DeckList },
  NewDeck: { screen: NewDeck }
})

const StackNav = createStackNavigator({
  Home: {
    screen: TabNav,
    navigationOptions: {
      header: null
    }
  },
  IndividualDeck: {
    screen: IndividualDeck,
    navigationOptions: {
      title: 'Questions Deck'
    }
  }
})

const RootTab = createAppContainer(StackNav)

export default class App extends Component {
  render() {
    // return (<DeckList />);
    // return (<NewDeck />);
    // return (<NewQuestion deckId='React'/>);
    // return (<IndividualDeck deckId='React' title='React' cards={2} />);
    // return (<Quiz deckId='React' title='React' cards={2} />);
    return <RootTab />
  }
}
