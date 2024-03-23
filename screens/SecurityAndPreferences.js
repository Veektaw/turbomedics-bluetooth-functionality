import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

const SecurityAndPreferences = () => {
  const navigate = useNavigation();

  const [openTab, setOpenTab] = useState(1);
  const [openRequest, setOpenRequest] = useState(1);

  const toggleTabs = (tab) => {
    setOpenTab(tab);
  };

  const toggleRequest = (tab) => {
    setOpenRequest(tab);
  };

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
            <Text className="font-bold text-xl">Security and Preferences</Text>
            <View className="w-fit bg-white">
              <Text className="p-2 rounded-full text-xs text-white">LA</Text>
            </View>
          </View>

          <View className="flex flex-row items-center justify-center mb-4 bg-BlueChalk p-3">
            <TouchableOpacity
              onPress={() => toggleTabs(1)}
              className={`w-1/2 py-1 px-4 rounded-sm ${
                openTab === 1 ? "bg-ResolutionBlue py-2" : ""
              }`}
            >
              <Text
                className={`text-center text-sm ${
                  openTab === 1 ? "text-white" : "text-black"
                }`}
              >
                Security
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => toggleTabs(2)}
              className={`w-1/2 py-1 px-4 rounded-sm ${
                openTab === 2 ? "bg-ResolutionBlue py-2" : ""
              }`}
            >
              <Text
                className={`text-center text-sm ${
                  openTab === 2 ? "text-white" : "text-black"
                }`}
              >
                Preferences
              </Text>
            </TouchableOpacity>
          </View>
          {openTab === 1 && (
            <View className="space-y-5">
              <View className="border border-OlsoGrey_2 rounded-3xl px-4 py-8">
                <Text className="font-semibold text-lg md:text-xl">
                  Password Reset
                </Text>
                <View className="overflow-x-auto py-6"></View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecurityAndPreferences;
