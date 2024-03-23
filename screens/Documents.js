import React from "react";
import { SafeAreaView, ScrollView, View, Text, Image } from "react-native";

const Documents = () => {
  return (
    <SafeAreaView className="bg-ResolutionBlue h-full text-white">
      <ScrollView className="bg-white">
        <View className="mx-4 py-4 space-y-6">
          <View className="flex flex-row items-center justify-between">
            <Text className="font-bold text-xl">Documents</Text>
            <View className="bg-WhiteLilac p-4 rounded-full">
              <Image
                className="w-6 h-6 rounded-full"
                source={require("../assets/icons/upload-doc-icon.png")}
              />
            </View>
          </View>
          <View className="flex flex-col items-center space-y-4 py-20">
            <View className="w-fit bg-LavendaMist p-4 rounded-full">
              <Image
                className="w-12 h-12 rounded-full"
                source={require("../assets/icons/document.png")}
              />
            </View>
            <Text>You have no files yet</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Documents;
