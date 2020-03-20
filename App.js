import React from "react";
import { Text, View, Platform, StatusBar } from "react-native";
import AddDeck from "./components/AddDeck";
import AddCard from "./components/AddCard";
import ViewDecks from "./components/ViewDecks";
import ViewDeck from "./components/ViewDeck";
import QuizResults from "./components/QuizResults";
import Quiz from "./components/Quiz";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";

// Structure for v5 from https://thefinnternet.com/react-native-navigation-v5/
enableScreens();

const store = createStore(reducer, middleware);

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
    <Stack.Screen name="ViewDeck" component={ViewDeck} />
    <Stack.Screen name="AddCard" component={AddCard} />
    <Stack.Screen name="Quiz" component={Quiz} />
    <Stack.Screen name="QuizResults" component={QuizResults} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DeckStatusBar />
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
