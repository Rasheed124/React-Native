// import axios from "axios";
// import { StatusBar } from "expo-status-bar";
// import { cache, useState } from "react";
// import {
//   Alert,
//   Button,
//   FlatList,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { s, vs } from "react-native-size-matters";

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import { vs } from "react-native-size-matters";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignInScreen from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

const { width } = Dimensions.get("window");

export default function App() {
  const [bookList, setBookList] = useState([]);

  // console.log(bookList);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <WelcomeScreen />
          {/* <SignInScreen /> */}
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
