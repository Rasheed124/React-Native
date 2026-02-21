import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTabs from "../components/TopTabs";
import MeditationCard from "../components/MeditationCard";
import { dummyData } from "../data/data";

const HomeScreen = () => {
  return (
    <View
      style={{
        paddingTop: vs(50),
        paddingHorizontal: s(16),
      }}
    >
      <Text
        style={{
          color: "#1D150F",
          fontSize: s(20),
          fontWeight: "bold",
          marginBottom: vs(6),
        }}
      >
        Meditations
      </Text>

      <Text
        style={{
          color: "#2C2016",
          fontSize: s(14),
          marginBottom: vs(16),
        }}
      >
        Lorem Ipsum is simply dummy text
      </Text>

      <TopTabs />

      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MeditationCard
            title={item.title}
            imageURL={item.image}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: vs(16),
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          paddingBottom: vs(250),
          paddingTop: vs(24),
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
