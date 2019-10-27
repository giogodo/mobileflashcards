import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default DeckListItem = (props) => {
  const { id, title, cards, navigation } = props

  const handlePress = () => {
    navigation.navigate(
      'IndividualDeck',
      { id }
    )
  }

  return (<TouchableOpacity
    style={styles.touchable}
    onPress={handlePress}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.cards}>{cards} cards</Text>
  </TouchableOpacity>)
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