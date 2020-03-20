import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Button
} from "react-native";
import DeckDescription from "./DeckDescription";
import { connect } from "react-redux";
import { startGame } from "../actions/currentGame";

class ViewDeck extends Component {
  handleAddCard = () => {
    const { name } = this.props;
    this.props.navigation.navigate("AddCard", {
      deckName: name
    });
  };

  handleStartQuiz = () => {
    const { dispatch, name } = this.props;

    dispatch(startGame(name));
    this.props.navigation.navigate("Quiz");
  };

  render() {
    const { name, nCards } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <DeckDescription name={name} nCards={nCards} />
        <Button title="Add Card" onPress={this.handleAddCard} />
        <Button title="Start Quiz" onPress={this.handleStartQuiz} />
      </View>
    );
  }
}

function mapStateToProps({ decks }, { route }) {
  const name = route.params.name;

  return {
    name,
    nCards: decks[name] ? decks[name].cards.length : 0
  };
}

export default connect(mapStateToProps)(ViewDeck);
