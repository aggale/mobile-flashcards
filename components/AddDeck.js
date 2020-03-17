import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

export default class AddDeck extends Component {
  state = {
    titleInput: ""
  };

  handleTextChange = e => {
    this.setState({ titleInput: e.nativeEvent.text });
  };

  submit = () => {
    console.log(this.state.titleInput);
  };

  render() {
    const { titleInput } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding">
        <Text>What is the title of the new deck?</Text>
        <TextInput value={titleInput} onChange={this.handleTextChange} />
        <TouchableOpacity onPress={this.submit}>
          <Text>Create</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
