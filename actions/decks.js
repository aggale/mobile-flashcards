export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const RECEIVE_DECKS = "RECEIVE_DECKS";

import { _addDeck, _getDecks, _addCard } from "../api";

function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}

export function handleAddDeck(name) {
  return dispatch => {
    const deck = { name, cards: [] };
    return _addDeck(deck).then(() => addDeck(deck));
  };
}

function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function handleInitializeDecks() {
  return dispatch => {
    _getDecks().then(decks => {
      dispatch(receiveDecks(JSON.parse(decks)));
    });
  };
}

function addCard(deckName, card) {
  return {
    type: ADD_CARD,
    deckName,
    card
  };
}

export function handleAddCard(deckName, question, answer) {
  return dispatch => {
    const card = { question, answer };

    return _addCard(deckName, card).then(decks =>
      dispatch(addCard(deckName, card))
    );
  };
}
