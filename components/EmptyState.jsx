import { router } from "expo-router";
import { View, Text, Image } from "react-native";

import { images } from "../constants";
import CustomButton from "./CustomButton";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="flex items-center justify-center px-4">
      <Image
        source={images.empty}
        resizeMode="contain"
        className="h-[216px] w-[270px]"
      />

      <Text className="font-pmedium text-sm text-gray-100">{title}</Text>
      <Text className="mt-2 text-center font-psemibold text-xl text-white">
        {subtitle}
      </Text>

      <CustomButton
        title="Back to Explore"
        handlePress={() => router.push("/home")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
