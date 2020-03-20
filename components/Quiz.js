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
import { answerQuestion } from "../actions/currentGame";

class Quiz extends Component {
  state = {
    showAnswer: false
  };

  revealAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };

  handleGradeQuestion = correct => {
    const { dispatch, currentQuestion, totalQuestions } = this.props;

    dispatch(answerQuestion(correct));

    this.setState({ showAnswer: false });

    if (currentQuestion < totalQuestions) {
      this.props.navigation.navigate("Quiz");
    } else {
      this.props.navigation.navigate("QuizResults");
    }
  };

  render() {
    const { question, answer, currentQuestion, totalQuestions } = this.props;
    const { showAnswer } = this.state;

    if (totalQuestions === 0) {
      return (
        <View>
          <Text>No questions available. Please add cards and try again.</Text>
        </View>
      );
    }

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{ paddingBottom: 30 }}
        >{`${currentQuestion}/${totalQuestions}`}</Text>
        <Text style={{ paddingBottom: 10 }}>{question}</Text>
        <TouchableOpacity
          onPress={this.revealAnswer}
          style={{ paddingBottom: 30 }}
        >
          <Text>{showAnswer ? answer : "Answer"}</Text>
        </TouchableOpacity>
        <Button
          color="green"
          style={{ paddingBottom: 10 }}
          title="Correct"
          onPress={() => this.handleGradeQuestion(true)}
        />
        <Button
          color="red"
          title="Incorrect"
          onPress={() => this.handleGradeQuestion(false)}
        />
      </View>
    );
  }
}

function mapStateToProps({ decks, currentGame }) {
  const card = decks[currentGame.name].cards[currentGame.currentQuestion - 1];
  return {
    question: card ? card.question : "",
    answer: card ? card.answer : "",
    currentQuestion: currentGame.currentQuestion,
    totalQuestions: decks[currentGame.name]
      ? decks[currentGame.name].cards.length
      : 0
  };
}

export default connect(mapStateToProps)(Quiz);
