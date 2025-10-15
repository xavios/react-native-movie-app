import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const Movie = (props: Props) => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({});
