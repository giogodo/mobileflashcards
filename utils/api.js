import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'FlashCard:deck1';
const LAST_QUIZ_STORAGE_KEY = 'FlashCard:lastquiz';

/**
 * @description Return all of the decks along with their titles, questions, and answers.
 */
export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(data => JSON.parse(data))
}

/**
 * @description Take in a single id argument and return the deck associated with that id.
 * @param {*} id - Id of the deck to retrieve.
 */
export function getDeck(id) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(data => JSON.parse(data)[id])
}

/**
 * @description Take in a single title argument and add it to the decks.
 * @param {*} title 
 */
export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
}

/**
 * @description Take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
 * @param {string} title - Id of the deck.
 * @param {Object} card - Object to save in the array questions of the deck entity.
 * @param {string} card.question
 * @param {string} card.answer
 */
export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(data => {
      decks = JSON.parse(data)
      decks[title].questions = decks[title].questions.concat(card)
      return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
    })
}