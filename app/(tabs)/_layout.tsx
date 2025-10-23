import TabIcon from "@/app/components/TabIcon";
import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { ImageSourcePropType } from "react-native";

const tabScreen = (name: string, title: string, icon: ImageSourcePropType) => (
  <Tabs.Screen
    name={name}
    options={{
      title: title,
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <TabIcon focused={focused} name={title} icon={icon} />
      ),
    }}
  ></Tabs.Screen>
);

const _layout = () => {
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
      {tabScreen("index", "Home", icons.home)}
      {tabScreen("search", "Search", icons.search)}
      {tabScreen("saved", "Saved", icons.save)}
      {tabScreen("profile", "Profile", icons.person)}
    </Tabs>
  );
};

export default _layout;
