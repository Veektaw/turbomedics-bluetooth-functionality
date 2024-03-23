import React from "react";
import { SafeAreaView, ScrollView, View, Text, Image } from "react-native";

const Calender = () => {
  return (
    <SafeAreaView className="bg-ResolutionBlue h-full text-white">
      <ScrollView className="bg-white">
        <View className="mx-4 py-4 space-y-6">
          <View className="flex flex-row items-center justify-between">
            <Text className="font-bold text-xl">Appointments</Text>
          </View>
          <View className="flex flex-col items-center space-y-4 py-20">
            <View className="w-fit bg-LavendaMist p-4 rounded-full">
              <Image
                className="w-12 h-12 rounded-full"
                source={require("../assets/icons/calendar-blue-icon.png")}
              />
            </View>
            <View className="space-y-3">
              <Text className="text-ResolutionBlue text-center font-bold text-lg">
                Appointment feature coming soon
              </Text>
              <View className="space-y-1 ">
                <Text className="text-MistBlue font-light text-center text-sm max-w-[300px]">
                  Schedule appointment with doctors
                </Text>
                <Text className="text-MistBlue font-light text-center text-sm max-w-[300px]">
                  at your convenience
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calender;
