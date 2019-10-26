import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Loader from './Loader';
import FlipCard from './FlipCard';

const dummyData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  JavaScript1: {
    title: 'JavaScript1',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared. A'
      },
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared. B'
      },
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared. C'
      },
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared. D'
      },
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared. E'
      }
    ]
  },
  JavaScript2: {
    title: 'JavaScript2',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  JavaScript3: {
    title: 'JavaScript3',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  JavaScript4: {
    title: 'JavaScript4',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  JavaScript5: {
    title: 'JavaScript5',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  JavaScript6: {
    title: 'JavaScript6',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  JavaScript7: {
    title: 'JavaScript7',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  JavaScript8: {
    title: 'JavaScript8',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export default class Quiz extends Component {
  state = {
    questions: null,
    currentQuestion: 1,
    score: 0
  }

  handlePressCorrect = () => {
    const { currentQuestion, questions, score } = this.state
    questionsQ = questions.length
    this.setState(() => ({
      currentQuestion: currentQuestion + 1,
      score: score + 1
    }))
    currentQuestion === questionsQ &&
      console.warn('Finished');
  }

  handlePressIncorrect = () => {
    const { currentQuestion, questions } = this.state
    questionsQ = questions.length
    this.setState(() => ({
      currentQuestion: currentQuestion + 1
    }))
    currentQuestion === questionsQ &&
      console.warn('Finished');
  }

  componentDidMount() {
    const { deckId } = this.props
    // Use getDeck(deckID) here
    const questions = dummyData[deckId].questions
    this.setState(() => ({
      questions
    }))
  }

  render() {
    const { questions, currentQuestion, score } = this.state

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