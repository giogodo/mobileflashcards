import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Animated } from 'react-native';

export default class DeckListItem extends Component {
  state = {
    bounceValue: new Animated.Value(1)
  }

  handlePress = () => {
    const { id, navigation } = this.props
    const { bounceValue } = this.state

    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 1.2 }),
      Animated.spring(bounceValue, { toValue: 1, friction: 4 })
    ]).start()

    setTimeout(() => {
      navigation.navigate(
        'IndividualDeck',
        { id }
      )
    }, 1000)
  }

  render() {
    const { title, cards } = this.props
    const { bounceValue } = this.state
    return (<TouchableOpacity
      style={styles.touchable}
      onPress={this.handlePress}>
      <Animated.Text style={[styles.title, { transform: [{ scale: bounceValue }] }]}>{title}</Animated.Text>
      <Animated.Text style={styles.cards}>{cards} cards</Animated.Text>
    </TouchableOpacity>)
  }
}

const styles = StyleSheet.create({
  touchable: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingVertical: 26,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    color: 'black',
    marginBottom: 5,
    textAlign: 'center'
  },
  cards: {
    fontSize: 18
  }
});