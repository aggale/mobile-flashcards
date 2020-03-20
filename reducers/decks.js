import { ADD_DECK, RECEIVE_DECKS, ADD_CARD } from "../actions/decks";

export default function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.deck.name]: action.deck
      };
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_CARD:
      return {
        ...state,
        [action.deckName]: {
          ...state[action.deckName],
          cards: state[action.deckName].cards.concat(action.card)
        }
      };
    default:
      return state;
  }
}
