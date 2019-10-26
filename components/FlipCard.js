import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class FlipCard extends Component {
  state = {
    flipped: false
  }

  handlePress = () => {
    const { flipped } = this.state
    this.setState(() => ({
      flipped: !flipped
    }))
  }

  UNSAFE_componentWillReceiveProps() {
    this.setState(() => ({
      flipped: false
    }))
  }

  render() {
    const { data } = this.props
    const { flipped } = this.state
    return (
      <TouchableOpacity
        style={styles.textContainer}
        onPress={this.handlePress}>
        <Text style={styles.text}>
          {flipped ? data.answer : data.question}
        </Text>
        <Text style={styles.leyend}>
          {flipped ? 'Answer' : 'Question'}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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
  textContainer: {
    flex: 3,
    justifyContent: 'center'
  }
});