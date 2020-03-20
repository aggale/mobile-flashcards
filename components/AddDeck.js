import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import { handleAddDeck } from "../actions/decks";

class AddDeck extends Component {
  state = {
    titleInput: ""
  };

  handleTextChange = e => {
    this.setState({ titleInput: e.nativeEvent.text });
  };

  submit = () => {
    const name = this.state.titleInput;

    this.props.dispatch(handleAddDeck(name));
    this.setState({ titleInput: "" });
    this.props.navigation.navigate("ViewDeck", {
      name: name
    });
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

export default connect()(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
