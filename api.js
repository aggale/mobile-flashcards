import { AsyncStorage } from "react-native";

export function _addDeck(deck) {
  return AsyncStorage.mergeItem(
    "@MyApp_decks",
    JSON.stringify({ [deck.name]: deck })
  );
}
export async function _addCard(deckName, card) {
  AsyncStorage.getItem("@MyApp_decks").then(deckstr => {
    const decks = JSON.parse(deckstr);
    decks[deckName].cards.push(card);
    return AsyncStorage.mergeItem(
      "@MyApp_decks",
      JSON.stringify({ [deckName]: decks[deckName] })
    );
  });
}

export async function _getDecks() {
  return await AsyncStorage.getItem("@MyApp_decks");
}
