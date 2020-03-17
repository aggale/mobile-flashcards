import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

export default class AddCard extends Component {
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
    console.log(this.state);
  };

  render() {
    const { question, answer } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding">
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
        <TouchableOpacity onPress={this.submit}>
          <Text>Create</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
