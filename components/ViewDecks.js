import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import DeckDescription from "./DeckDescription";

export default class ViewDeck extends Component {
  viewDeck = e => {
    console.log(e.nativeEvent);
  };

  render() {
    const cards = [{ name: "Deck1", nCards: 4 }, { name: "Deck2", nCards: 1 }];
    return (
      <View style={{ flex: 1 }}>
        {cards.map(card => (
          <TouchableOpacity
            key={card.name}
            onPress={e => {
              this.viewDeck(card);
            }}
          >
            <DeckDescription name={card.name} nCards={card.nCards} />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
