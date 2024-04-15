import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex flex-1 items-center justify-center bg-white">
      <Text className="text-5xl font-pblack">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-red-300">
        Go to Profile
      </Link>
    </View>
  );
}
