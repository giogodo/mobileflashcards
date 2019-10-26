import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class IndividualDeck extends Component {

  handlePressAddCard = () => {
    console.warn('Add card pressed');
  }

  handlePressStartQuiz = () => {
    console.warn('Start Quiz pressed');
  }

  render() {
    const { id, title, cards } = this.props
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