import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
    // Use addCardToDeck here
    console.warn(this.state.question, this.state.answer)
  }

  render() {
    const { question, answer } = this.state
    return (
      <View style={styles.container}>
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
      </View>
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