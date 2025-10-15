import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

type Props = {};

const _layout = (props: Props) => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="search"
        options={{ title: "Search", headerShown: false }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="saved"
        options={{ title: "Saved", headerShown: false }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
