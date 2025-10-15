import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-dark-100">
      <Text className="text-5xl text-accent">Welcome!</Text>
      <Text className="text-2xl text-light-300">This is my app bitches!</Text>

      <Link href="/movies/avangers" className="text-4xl text-white">
        Avengers
      </Link>
    </View>
  );
}
