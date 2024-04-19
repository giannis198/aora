import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/global-provider";

export default function App() {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="h-full  w-full items-center justify-center px-4">
          <Image
            source={images.logo}
            className="h-[84px] w-[130px]"
            resizeMode="contain"
          />

          <Image
            className="h-[300px] w-full max-w-[380px]"
            source={images.cards}
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-center text-3xl font-bold text-white">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="absolute -bottom-2 -right-8 h-[15px] w-[136px]"
              resizeMode="contain"
            />
          </View>
          <Text className="mt-7 text-center font-pregular text-sm text-gray-100">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
