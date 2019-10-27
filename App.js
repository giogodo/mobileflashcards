import React, { Component } from 'react';
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import IndividualDeck from './components/IndividualDeck';
import Quiz from './components/Quiz';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { setLocalNotification } from './utils/helpers'

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
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: 'New Question'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  }
})

const RootTab = createAppContainer(StackNav)

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return <RootTab />
  }
}
