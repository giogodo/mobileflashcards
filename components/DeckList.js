import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import DeckListItem from './DeckListItem'
import EmptyState from './EmptyState'
import Loader from './Loader';
import { getDecks, getLastQuizDate } from '../utils/api'

export default class DeckList extends Component {
  state = {
    deckListData: null
  }

  getData = () => {
    getDecks().then(decks => {
      // Validating the result of the getDecks method.
      decks
        ? this.setState(() => ({
          deckListData: Object.entries(decks)
            .map(([key, value]) => ({
              id: key,
              title:
                value.title,
              cards: value.questions.length
            })).reverse()
        }))
        : this.setState(() => ({
          deckListData: [] // If the method send a decks object undefined show the empty state by setting the state to []
        }))
    })
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props
    return <DeckListItem
      {...item}
      navigation={navigation}
    />
  }

  componentDidMount() {
    getLastQuizDate().then(data => console.log(data))
    // Refreshing the data calling getData() method every time that the view get focus.
    // Make sense for the new decks and questions added in other views
    didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      payload => {
        this.getData()
      }
    )
  }

  render() {
    const { deckListData } = this.state
    if (!deckListData) {
      return <Loader />
    }
    if (deckListData.length === 0) {
      return <EmptyState />
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={deckListData}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
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
  }
});