import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
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
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text>What is the title of the new deck?</Text>
        <TextInput
          value={titleInput}
          onChange={this.handleTextChange}
          style={{ padding: 20 }}
          placeholder="Deck name"
        />
        <Button title="Create" onPress={this.submit} />
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
