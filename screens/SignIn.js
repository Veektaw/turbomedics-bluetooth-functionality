import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-ResolutionBlue h-full text-white">
      <ScrollView className="bg-white">
        <View className="py-10 space-y-6">
          <View className="mx-6">
            <Image source={require("../assets/images/Logo.png")} />
          </View>
          <View className="">
            <Image
              className="w-full"
              source={require("../assets/images/Image.png")}
            />
          </View>
          <View className="mx-6">
            <View className="space-y-2.5 mb-8">
              <Text className="font-bold text-2xl fonturbanist">
                Welcome Back!
              </Text>
              <Text className="text-OlsoGrey">Sign in to your account</Text>
            </View>

            <View className="space-y-6">
              <View>
                <Text className="text-BluishGrey">Email</Text>
                <TextInput className="border-b border-b-BlueChalk" />
              </View>
              <View>
                <Text className="text-BluishGrey">Password</Text>
                <TextInput
                  className="border-b border-b-BlueChalk"
                  secureTextEntry
                />
              </View>
              <View className="w-full">
                <TouchableOpacity
                  onPress={() => navigation.navigate("Tabs")}
                  className="bg-ResolutionBlue py-4 rounded-3xl"
                >
                  <Text className="text-center text-white font-bold">
                    Sign in
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="flex-row items-center justify-center space-x-1">
                <Text className="text-MountainMist font-medium">
                  Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                  <Text className="text-ResolutionBlue font-medium">
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* <View className="stepper">
            <View className="stepper-progress">
              <View className="stepper-progress-bar" :style="'width:' + stepperProgress"></View>
              </View>
          </View> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
