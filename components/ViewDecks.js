import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Animated
} from "react-native";
import { connect } from "react-redux";
import { handleInitializeDecks } from "../actions/decks";
import DeckDescription from "./DeckDescription";

class ViewDecks extends Component {
  state = {
    opacity: new Animated.Value(1)
  };

  viewIndividualDeck = deck => {
    const { opacity } = this.state;
    const { navigation } = this.props;

    Animated.timing(opacity, { duration: 200, toValue: 0.7 }).start();
    navigation.navigate("ViewDeck", {
      name: deck.name
    });
  };

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitializeDecks());
  }

  render() {
    const { decks, navigation } = this.props;
    const { opacity } = this.state;

    if (Object.keys(decks).length === 0) {
      <View>
        <Text>No decks available</Text>
      </View>;
    }

    return (
      <ScrollView style={{ flex: 1 }}>
        {decks ? (
          Object.keys(decks).map(name => {
            const deck = decks[name];
            return (
              <TouchableOpacity
                key={deck.name}
                onPress={() => this.viewIndividualDeck(deck)}
                style={{ margin: 20 }}
              >
                <Animated.Text style={{ opacity }}>{name}</Animated.Text>
                <Text>{`${deck.cards.length} cards`}</Text>
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
