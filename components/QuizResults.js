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
import { restartQuiz } from "../actions/currentGame";
import { clearLocalNotification, setLocalNotification } from "../helpers";

class QuizResults extends Component {
  restartQuiz = () => {
    const { navigation, dispatch } = this.props;

    dispatch(restartQuiz());
    navigation.navigate("Quiz");
  };

  returnToDeck = () => {
    const { navigation, deckName } = this.props;

    navigation.navigate("ViewDeck", {
      name: deckName
    });
  };

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { correct } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ paddingBottom: 30 }}>{`You got ${correct} right!`}</Text>
        <Button title="Restart Quiz" onPress={this.restartQuiz} />
        <Button title="Back to Deck" onPress={this.returnToDeck} />
      </View>
    );
  }
}

function mapStateToProps({ currentGame }) {
  return {
    deckName: currentGame.name,
    correct: currentGame.correctAnswers
  };
}

export default connect(mapStateToProps)(QuizResults);
