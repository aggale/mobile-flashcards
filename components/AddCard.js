import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import { handleAddCard } from "../actions/decks";
import { connect } from "react-redux";

class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  handleQuestionChange = e => {
    this.setState({ question: e.nativeEvent.text });
  };

  handleAnswerChange = e => {
    this.setState({ answer: e.nativeEvent.text });
  };

  submit = () => {
    const { dispatch, navigation } = this.props;
    const { deckName } = this.props.route.params;
    const { question, answer } = this.state;

    dispatch(handleAddCard(deckName, question, answer));
    this.setState({ question: "", answer: "" });
    navigation.navigate("ViewDeck", {
      name: deckName
    });
  };

  render() {
    const { question, answer } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          placeholder="Question"
          value={question}
          onChange={this.handleQuestionChange}
        />
        <TextInput
          placeholder="Answer"
          value={answer}
          onChange={this.handleAnswerChange}
        />
        <Button title="Create" onPress={this.submit}></Button>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default connect()(AddCard);
