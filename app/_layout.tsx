import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1" edges={["top", "right", "left"]}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ title: "Tabs", headerShown: false }}
          />
          <Stack.Screen
            name="movies/[id]"
            options={{ title: "Movie Details", headerShown: false }}
          />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
