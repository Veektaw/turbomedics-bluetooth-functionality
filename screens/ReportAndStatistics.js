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

const ReportAndStatistics = () => {
  const navigate = useNavigation();

  return (
    <SafeAreaView className="bg-ResolutionBlue h-full text-white">
      <ScrollView className="bg-white">
        <View className="mx-4 py-4 space-y-6">
          <View className="flex flex-row items-center justify-between mb-10">
            <TouchableOpacity
              onPress={() => navigate.navigate("settings")}
              className="w-fit"
            >
              <Image
                className="w-6 h-6 rounded-full"
                source={require("../assets/icons/arrow-left.png")}
              />
            </TouchableOpacity>
            <Text className="font-bold text-xl">Report & Statistics</Text>
            <View className="w-fit bg-white">
              <Text className="p-2 rounded-full text-xs text-white">LA</Text>
            </View>
          </View>

          <View className="space-y-10">
            <View className="flex flex-row items-center justify-between border-b border-b-BlueChalk pb-6">
              <Text className="text-BluishGrey">Start Date</Text>
              <TouchableOpacity className="w-fit">
                <Image
                  className="w-4 h-4"
                  source={require("../assets/icons/calendar-icon.png")}
                />
              </TouchableOpacity>
            </View>
            <View className="flex flex-row items-center justify-between border-b border-b-BlueChalk pb-6">
              <Text className="text-BluishGrey">End Date</Text>
              <TouchableOpacity className="w-fit">
                <Image
                  className="w-5 h-5"
                  source={require("../assets/icons/calendar-icon.png")}
                />
              </TouchableOpacity>
            </View>
            <View className="border-b border-b-BlueChalk pb-6">
              <Text className="text-BluishGrey">Email</Text>
            </View>
            <View className="w-full">
              <TouchableOpacity className="bg-ResolutionBlue py-4 rounded-3xl">
                <Text className="text-center text-white font-bold">
                  Generate
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportAndStatistics;
