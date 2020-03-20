import React, { Component } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import { handleInitializeDecks } from "../actions/decks";
import DeckDescription from "./DeckDescription";

class ViewDecks extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitializeDecks());
  }

  render() {
    const { decks, navigation } = this.props;

    return (
      <ScrollView style={{ flex: 1 }}>
        {decks ? (
          Object.keys(decks).map(name => {
            const deck = decks[name];
            return (
              <TouchableOpacity
                key={deck.name}
                onPress={() =>
                  navigation.navigate("ViewDeck", {
                    name: deck.name
                  })
                }
              >
                <DeckDescription name={deck.name} nCards={deck.cards.length} />
              </TouchableOpacity>
            );
          })
        ) : (
          <Text>No decks available</Text>
        )}
      </ScrollView>
    );
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(ViewDecks);
