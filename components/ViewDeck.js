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

export default class ViewDeck extends Component {
  handleAddCard = () => {
    console.log("Add card");
  };

  handleStartQuiz = () => {
    console.log("Start quiz");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <DeckDescription
          name={this.props.card.name}
          nCards={this.props.card.nCards}
        />
        <Button title="Add Card" onPress={this.handleAddCard} />
        <Button title="Start Quiz" onPress={this.handleStartQuiz} />
      </View>
    );
  }
}
