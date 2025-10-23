import { icons } from "@/constants/icons";
import React from "react";
import {
  Image,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TextInput,
  View,
} from "react-native";

export interface SearchBarProps {
  placeholder: string;
  onPress: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const SearchBar = ({ placeholder, onPress }: SearchBarProps) => {
  return (
    <View className="w-full mx-16 h-14 bg-dark-200 rounded-full p-2 flex-row justify-stretch items-center">
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#CECEFB"
        className="flex-1 ml-2 p-2"
        onPress={onPress}
      />
    </View>
  );
};

export default SearchBar;
