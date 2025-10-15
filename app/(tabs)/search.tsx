import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const Search = (props: Props) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-6xl">Search for movies.</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
