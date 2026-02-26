import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { cache, useState } from "react";
import { Alert, Button, FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [bookList, setBookList] = useState([]);

  const apiEndPoint = "https://699da14283e60a406a46f5f3.mockapi.io/books";
  const getListOfBook = async () => {
    try {
      const response = await axios.get(apiEndPoint);
      const data = JSON.stringify(response.data, null);
      setBookList(response.data);
    } catch (error) {}
  };

  const getBookById = async () => {
    try {
      const response = await axios.get(`${apiEndPoint}/94`);
      const data = JSON.stringify(response.data, null);
      console.log(data);
    } catch (error) {
      console.log(`Unexpected error ${error}`);
    }
  };
  const deleteBookByID = async () => {
    try {
      const response = await axios.delete(`${apiEndPoint}/4`);

      Alert.alert("")
      
    } catch (error) {
      console.log(`Unexpected error ${error}`);
    }
  };



  // console.log(bookList);

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>

      <View style={{ marginTop: 100 }}>
        <Button title="Click Me" onPress={getBookById} />
      </View>
      <FlatList
        data={bookList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text> {item.name_of_author}</Text>
            <Text> {item.email_of_seller}</Text>
            <Image source={{ uri: item.cover }} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
