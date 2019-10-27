import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'FlashCard:deckTTTT';
const LAST_QUIZ_STORAGE_KEY = 'FlashCard:lastquiz';

//getDecks: return all of the decks along with their titles, questions, and answers.
export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(data => JSON.parse(data))
}
//getDeck: take in a single id argument and return the deck associated with that id.
export function getDeck(id) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(data => JSON.parse(data)[id])
}
//saveDeckTitle: take in a single title argument and add it to the decks.
export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
}
//addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.