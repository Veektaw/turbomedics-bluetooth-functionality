import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Glucose from "../assets/icons/glucose-icon.svg";
import Text from "../components/AppText";
const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-ResolutionBlue h-full text-white">
      <ScrollView className="bg-white">
        <View className="mx-4 py-4 space-y-8">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-sm">Good Evening</Text>
              <Text className=" text-3xl">Daniel Eloma</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("settings")}>
              <Image
                className="w-6 h-6 rounded-full"
                source={require("../assets/icons/notification.png")}
              />
            </TouchableOpacity>
          </View>

          <View>
            <View className="bg-ResolutionBlue  flex flex-row justify-between items-center border rounded-xl px-5 py-6">
              <View className="space-y-3">
                {/* <Text className="text-2xl font-semibold text-white font-urbanist">
                  {" "}
                  Your Progressa
                </Text> */}
                <Text className="text-2xl font-semibold text-white">
                  {" "}
                  Your Progress
                </Text>
                <Text className="text-base text-white">
                  {" "}
                  Monthly Progress Report
                </Text>
              </View>
              <View className="rounded-full border-[6px] border-[#6777B2] px-4 py-5">
                <Text className="font-bold text-white">--%</Text>
              </View>
            </View>
          </View>

          {/* User Vitals */}
          <View>
            <View className="flex-row items-center justify-between mb-4">
              <Text>Vitalss</Text>
              <TouchableOpacity>
                <Text className="underline">Edit</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row space-x-4 mb-4">
              <View className="w-[48%] bg-TitanWhite rounded-2xl flex flex-row items-start justify-between p-4">
                <View className="space-y-2.5">
                  <Text className="text-OlsoGrey text-xs">Glucose</Text>
                  <View className="flex flex-row items-center space-x-1">
                    <Text className="font-bold text-2xl">--</Text>
                    <Text className="font-semibold text-base pt-3">mg/dl</Text>
                  </View>
                </View>
                <View className="bg-LavendaMist p-1.5 rounded-full">
                  {/* <Image
                    className="bg-LavendaMist w-6 h-6 rounded-full"
                    source={require("../assets/icons/glucose-icon.png")}
                  /> */}
                  <Glucose />
                </View>
              </View>
              <View className="w-[48%] bg-ClearDay rounded-2xl flex flex-row items-start justify-between p-4">
                <View className="space-y-2.5">
                  <Text className="text-OlsoGrey text-xs">Hearth Rate</Text>
                  <View className="flex flex-row items-center space-x-1">
                    <Text className="font-bold text-2xl">--</Text>
                    <Text className="font-semibold text-base pt-3">bpm</Text>
                  </View>
                </View>
                <View className="bg-LavendaMist p-1.5 rounded-full">
                  <Image
                    className="bg-LavendaMist w-6 h-6 rounded-full"
                    source={require("../assets/icons/heart-rate-icon.png")}
                  />
                </View>
              </View>
            </View>
            <View className="flex flex-row space-x-4">
              <View className="w-[48%] bg-PattensBlue rounded-2xl flex flex-row items-start justify-between p-4">
                <View className="space-y-2.5">
                  <Text className="text-OlsoGrey text-xs">Blood Pressure</Text>
                  <View className="flex flex-row items-center space-x-1">
                    <Text className="font-bold text-2xl">--</Text>
                    <Text className="font-semibold text-base pt-3">mmHg</Text>
                  </View>
                </View>
                <View className="bg-LavendaMist p-1.5 rounded-full">
                  <Image
                    className="bg-LavendaMist w-6 h-6 rounded-full"
                    source={require("../assets/icons/blood-pressure-icon.png")}
                  />
                </View>
              </View>
              <View className="w-[48%] bg-ScotchMist rounded-2xl flex flex-row items-start justify-between p-4">
                <View className="space-y-2.5">
                  <Text className="text-OlsoGrey text-xs">Lung Capacity</Text>

                  <View className="flex flex-row items-center space-x-1">
                    <Text className="font-bold text-2xl">--</Text>
                    <Text className="font-semibold text-base pt-3">L</Text>
                  </View>
                </View>
                <View className="bg-LavendaMist p-1.5 rounded-full">
                  <Image
                    className="bg-LavendaMist w-6 h-6 rounded-full"
                    source={require("../assets/icons/lung-icon.png")}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Blood Glucose Chart */}
          <View className="border border-OlsoGrey_2 border-3xl p-5 rounded-2xl">
            <Text className="font-semibold">Blood Glucose</Text>
            <View className="flex flex-col items-center space-y-3 py-8">
              <View className="bg-LavendaMist p-3 rounded-full">
                <Image
                  className="w-6 h-6 rounded-full"
                  source={require("../assets/icons/addchart.png")}
                />
              </View>
              <Text>You have no chart yet</Text>
              <TouchableOpacity className="bg-ResolutionBlue rounded-3xl p-3.5 w-[75%]">
                <Text className="text-white text-center">
                  Capture your Vitals
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
