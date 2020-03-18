import React from "react";
import { Text, View, Platform, StatusBar } from "react-native";
import AddDeck from "./components/AddDeck";
import AddCard from "./components/AddCard";
import ViewDecks from "./components/ViewDecks";
import ViewDeck from "./components/ViewDeck";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";

enableScreens();

function DeckStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} />
    </View>
  );
}

const Tab =
  Platform.OS === "ios"
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="ViewDecks" component={DeckNavigator} />
    <Tab.Screen name="AddDeck" component={AddDeck} />
  </Tab.Navigator>
);

const Stack = createStackNavigator();
const DeckNavigator = () => (
  <Stack.Navigator
    screenOption={{
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "purple"
      }
    }}
  >
    <Stack.Screen name="ViewDecks" component={ViewDecks} />
    <Stack.Screen name="DeckDetails" component={ViewDeck} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <DeckStatusBar />
      <TabNavigator />
    </NavigationContainer>
  );
}
