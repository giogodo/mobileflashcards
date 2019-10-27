import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, TextInput, Button } from 'react-native';
import { addCardToDeck } from '../utils/api'

export default class NewQuestion extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleChangeQuestion = text => {
    this.setState(() => ({
      question: text
    }))
  }

  handleChangeAnswer = text => {
    this.setState(() => ({
      answer: text
    }))
  }

  handleSubmit = () => {
    const { navigation } = this.props
    const { deckId } = navigation.state.params
    this.setState(() => ({
      question: '',
      answer: ''
    }))
    addCardToDeck(deckId, this.state).then(() => {
      navigation.goBack()
    })
  }

  render() {
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView behavior='height' style={styles.container}>
        <TextInput
          placeholder={'Question...'}
          style={styles.input}
          value={question}
          onChangeText={this.handleChangeQuestion} />
        <TextInput
          placeholder={'Answer...'}
          style={styles.input}
          value={answer}
          onChangeText={this.handleChangeAnswer} />
        <Button
          title="Submit"
          style={styles.button}
          disabled={question === '' || answer === ''}
          onPress={this.handleSubmit}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
    padding: '10%'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    marginBottom: 55
  },
  button: {
    margin: 30
  }
});