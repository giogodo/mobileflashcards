import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Loader from './Loader';
import { getDeck } from '../utils/api'

export default class IndividualDeck extends Component {
  state = {
    title: null,
    cards: 0
  }

  handlePressAddCard = () => {
    const { navigation } = this.props
    const { id } = navigation.state.params
    navigation.navigate(
      'NewQuestion',
      { deckId: id }
    )
  }

  handlePressStartQuiz = () => {
    const { navigation } = this.props
    const { cards } = this.state
    const { id } = navigation.state.params
    cards === 0
      ? Alert.alert(
        'No cards',
        'You cannot take a quiz because there are no cards in the deck',
        [
          { text: 'Ok', onPress: () => { } },
          { text: 'Lets add cards', onPress: () => this.handlePressAddCard() }
        ],
        { cancelable: false }
      )
      : navigation.navigate(
        'Quiz',
        { deckId: id }
      )
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params
    getDeck(id).then(deck => {
      const title = deck.title
      const cards = deck.questions.length
      this.setState(() => ({
        title,
        cards
      }))

    })
  }

  render() {
    const { title, cards } = this.state

    if (!title) {
      return <Loader />
    }

    return (
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.cards}>
            {cards} cards
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            title="Add Card"
            onPress={this.handlePressAddCard}
          />
          <Button
            color='black'
            title="Start Quiz"
            onPress={this.handlePressStartQuiz}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
    padding: '10%'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  cards: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333333'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'space-evenly'
  }
});