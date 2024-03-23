import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const Devices = () => {
  const navigate = useNavigation();

  return (
    <SafeAreaView className="bg-ResolutionBlue h-full text-white">
      <ScrollView className="bg-white">
        <View className="mx-4 py-4 space-y-6">
          <View className="flex flex-row items-center justify-between mb-4">
            <TouchableOpacity
              onPress={() => navigate.navigate("settings")}
              className="w-fit"
            >
              <Image
                className="w-6 h-6 rounded-full"
                source={require("../assets/icons/arrow-left.png")}
              />
            </TouchableOpacity>
            <Text className="font-bold text-xl">Devices</Text>
            <View className="w-fit bg-white">
              <Text className="p-2 rounded-full text-xs text-white">LA</Text>
            </View>
          </View>

          <View className="bg-WhiteLilac border border-BluishGrey px-5 rounded-xl py-8">
            <Text className="font-bold text-base mb-6">Conected Devices</Text>
            <View className="bg-white px-4 py-3 flex flex-row items-center space-x-4 rounded-md">
              <View className="w-fit p-2 border border-BluishGrey">
                <Image
                  className="w-12 h-12 rounded-full"
                  source={require("../assets/images/device-img.png")}
                />
              </View>
              <View className="space-y-1">
                <Text className="text-BluishGrey text-xs font-lighter">
                  Blood Glucose
                </Text>
                <Text className="font-bold text-base">
                  4G Blood Glucose Monitor
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Devices;
