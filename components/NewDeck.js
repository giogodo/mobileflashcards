import React, { Component } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Button } from 'react-native';
import { saveDeckTitle } from '../utils/api'

export default class NewDeck extends Component {
  state = {
    deckTitle: ''
  }

  handleChange = text => {
    this.setState(() => ({
      deckTitle: text
    }))
  }

  handleSubmit = () => {
    const { deckTitle } = this.state
    const { navigation } = this.props
    // Saving to AsyncStorage, then cleaning the state and returning to home.
    saveDeckTitle(deckTitle).then(() => {
      this.setState(() => ({
        deckTitle: ''
      }))
      navigation.goBack()
    })
  }

  render() {
    const { deckTitle } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.label}>
          What is the title of your new deck?
        </Text>
        <TextInput
          placeholder={'Deck Title'}
          style={styles.input}
          value={deckTitle}
          onChangeText={this.handleChange} />
        <Button
          title="Submit"
          style={styles.button}
          disabled={deckTitle === ''}
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
  label: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#333333'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    marginTop: 25,
    marginBottom: 25
  },
  button: {
    margin: 30
  }
});