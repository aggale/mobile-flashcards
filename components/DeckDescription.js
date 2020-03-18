import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

export default function DeckDescription(props) {
  const { name, nCards } = props;

  return (
    <View style={{ margin: 20 }}>
      <Text>{name}</Text>
      <Text>{`${nCards} cards`}</Text>
    </View>
  );
}
