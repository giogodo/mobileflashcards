import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Loader from './Loader';
import FlipCard from './FlipCard';
import { getDeck } from '../utils/api'

export default class Quiz extends Component {
  state = {
    questions: null,
    currentQuestion: 1,
    score: 0
  }

  handlePressCorrect = () => {
    const { currentQuestion, questions, score } = this.state
    questionsQ = questions.length
    currentQuestion < questionsQ ?
      this.setState(() => ({
        currentQuestion: currentQuestion + 1,
        score: score + 1
      })) :
      this.showDialog(score + 1, questionsQ)
  }

  handlePressIncorrect = () => {
    const { currentQuestion, questions, score } = this.state
    questionsQ = questions.length
    currentQuestion < questionsQ ?
      this.setState(() => ({
        currentQuestion: currentQuestion + 1
      })) :
      this.showDialog(score, questionsQ)
  }

  showDialog = (score, questionsQ) => {
    Alert.alert(
      'Score',
      `You answered correctly ${score} of  ${questionsQ} questions!!!`,
      [
        { text: 'Restart Quiz', onPress: () => this.restartQuiz() },
        { text: 'Back to Deck', onPress: () => this.props.navigation.goBack() }
      ],
      { cancelable: false }
    )
  }

  restartQuiz = () => {
    this.setState(() => ({
      currentQuestion: 1,
      score: 0
    }))
  }

  componentDidMount() {
    const { deckId } = this.props.navigation.state.params
    // Getting the questions.
    getDeck(deckId).then(deck => {
      const questions = deck.questions
      this.setState(() => ({
        questions
      }))
    })
  }

  render() {
    const { questions, currentQuestion } = this.state

    if (!questions) {
      return <Loader />
    }
    const questionsQ = questions.length

    return (
      <View style={styles.mainContainer}>
        {currentQuestion <= questionsQ &&
          < FlipCard data={questions[currentQuestion - 1]} />}
        <View style={styles.buttonsContainer}>
          <Button
            color='green'
            title="Correct"
            onPress={this.handlePressCorrect}
          />
          <Button
            color='red'
            title="Incorrect"
            onPress={this.handlePressIncorrect}
          />
        </View>
        <View style={styles.counter}>
          <Text>{currentQuestion} / {questionsQ}</Text>
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
    padding: '10%',
    position: 'relative'
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  leyend: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  counter: {
    position: 'absolute',
    margin: "13%"
  }
});