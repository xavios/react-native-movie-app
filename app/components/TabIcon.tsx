import { images } from "@/constants/images";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";

export const TabIcon = ({
  focused = false,
  name,
  icon,
}: {
  focused: boolean;
  name: string;
  icon: ImageSourcePropType;
}) =>
  focused ? (
    <ImageBackground
      source={images.highlight}
      className="flex flex-1 flex-row w-full min-w-[112px] min-h-[52px] mt-6 justify-center items-center rounded-full overflow-hidden"
    >
      <Image source={icon} tintColor={"#151312"} className="size-5"></Image>
      <Text className="text-secondary text-base font-semibold ml-3">
        {name}
      </Text>
    </ImageBackground>
  ) : (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor={"#A8B5DB"} className="size-5"></Image>
    </View>
  );
