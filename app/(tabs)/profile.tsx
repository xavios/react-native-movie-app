import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const Profile = (props: Props) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-6xl">My Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
