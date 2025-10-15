import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const Saved = (props: Props) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-6xl">Saved movies.</Text>
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({});
