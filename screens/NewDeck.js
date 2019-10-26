import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
    console.warn(this.state.deckTitle)
  }

  render() {
    const { deckTitle } = this.state
    return (
      <View style={styles.container}>
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
    backgroundColor: '#F5FCFF',
    margin: '10%'
  },
  label: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
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