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

const { width } = Dimensions.get("window");

export default function App() {
  const [bookList, setBookList] = useState([]);

  // console.log(bookList);

return (
    <View  style={styles.container}>
      <StatusBar barStyle="dark-content" />
        {/* <WelcomeScreen /> */}
        <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    
  },

});