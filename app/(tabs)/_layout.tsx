import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Props = {};

const TabIcon = ({
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

const _layout = (props: Props) => {
  return (
    <Tabs
      screenOptions={{
        animation: "fade",
        transitionSpec: {
          animation: "timing",
          config: {
            duration: 300,
          },
        },
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 46,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="Home" icon={icons.home} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="Search" icon={icons.search} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="Saved" icon={icons.save} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="Profile" icon={icons.person} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
