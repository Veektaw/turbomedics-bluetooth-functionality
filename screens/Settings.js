import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <View className="mx-4 py-4 space-y-6">
          <View className="flex flex-row items-center justify-between">
            <Text className="font-bold text-xl">Settings</Text>
            <View className="bg-WhiteLilac p-1.5 rounded-full">
              <Image
                className="w-6 h-6 rounded-full"
                source={require("../assets/icons/setting-icon.png")}
              />
            </View>
          </View>

          <View className="bg-ResolutionBlue rounded-xl p-4">
            <View className="flex flex-row items-center space-x-5">
              <Image
                className="w-20 h-20 bg-white rounded-full"
                source={{
                  uri: "https://lawal-akande.netlify.app/images/profilepic.jpeg",
                }}
              />
              <View className="flex space-y-1.5">
                <Text className="text-white text-xl font-semibold">
                  Daniel Eloma
                </Text>
                <Text className="text-white text-sm font-light">
                  lawal.a@turbham.com
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
              General
            </Text>
            <View className="space-y-6">
              {/* Account Information navigation.navigate("account-information")}*/}
              <TouchableOpacity
                onPress={() => navigation.navigate("AccountInformations")}
              >
                <View className="flex flex-row items-center justify-between pb-6 border-b border-b-GreenWhite">
                  <View className="flex flex-row items-center space-x-4">
                    <View className="bg-WhiteLilac p-3.5 rounded-full">
                      <Image
                        className="w-6 h-6 rounded-full"
                        source={require("../assets/icons/user.png")}
                      />
                    </View>
                    <View className="space-y-2">
                      <Text className="font-bold text-sm">
                        Account Information
                      </Text>
                      <Text className="text-OlsoGrey text-xs">
                        Change your account information
                      </Text>
                    </View>
                  </View>
                  <View className="">
                    <Image
                      className="w-6 h-6 rounded-full"
                      source={require("../assets/icons/chevron-right.png")}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              {/* Devices */}
              <TouchableOpacity onPress={() => navigation.navigate("Devices")}>
                <View className="flex flex-row items-center justify-between pb-6 border-b border-b-GreenWhite">
                  <View className="flex flex-row items-center space-x-4">
                    <View className="bg-WhiteLilac p-3.5 rounded-full">
                      <Image
                        className="w-6 h-6 rounded-full"
                        source={require("../assets/icons/device-icon.png")}
                      />
                    </View>
                    <View className="space-y-2">
                      <Text className="font-bold text-sm">Devices</Text>
                      <Text className="text-OlsoGrey text-xs">
                        Check your devices here
                      </Text>
                    </View>
                  </View>
                  <View className="">
                    <Image
                      className="w-6 h-6 rounded-full"
                      source={require("../assets/icons/chevron-right.png")}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              {/* Report & Statistics */}
              <TouchableOpacity
                onPress={() => navigation.navigate("ReportAndStatistics")}
              >
                <View className="flex flex-row items-center justify-between pb-6 border-b border-b-GreenWhite">
                  <View className="flex flex-row items-center space-x-4">
                    <View className="bg-WhiteLilac p-3.5 rounded-full">
                      <Image
                        className="w-6 h-6 rounded-full"
                        source={require("../assets/icons/repport-and-statistic-icon.png")}
                      />
                    </View>
                    <View className="space-y-2">
                      <Text className="font-bold text-sm">
                        Report & Statistics
                      </Text>
                      <Text className="text-OlsoGrey text-xs">
                        Generate a report over a period
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Image
                      className="w-6 h-6 rounded-full"
                      source={require("../assets/icons/chevron-right.png")}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("AccountLinking")}
              >
                <View className="flex flex-row items-center justify-between pb-6 border-b border-b-GreenWhite">
                  <View className="flex flex-row items-center space-x-4">
                    <View className="bg-WhiteLilac p-3.5 rounded-full">
                      <Image
                        className="w-6 h-6 rounded-full"
                        source={require("../assets/icons/fi_link.png")}
                      />
                    </View>
                    <View className="space-y-2">
                      <Text className="font-bold text-sm">Account Linking</Text>
                      <Text className="text-OlsoGrey text-xs">
                        Get your account linked with another patient
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Image
                      className="w-6 h-6 rounded-full"
                      source={require("../assets/icons/chevron-right.png")}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("SecurityAndPreferences")}
              >
                <View className="flex flex-row items-center justify-between pb-6 border-b border-b-GreenWhite">
                  <View className="flex flex-row items-center space-x-4">
                    <View className="bg-WhiteLilac p-3.5 rounded-full">
                      <Image
                        className="w-6 h-6 rounded-full"
                        source={require("../assets/icons/security.png")}
                      />
                    </View>
                    <View className="space-y-2">
                      <Text className="font-bold text-sm">
                        Security and Preferences
                      </Text>
                      <Text className="text-OlsoGrey text-xs">
                        Administer your security and preferences
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Image
                      className="w-6 h-6 rounded-full"
                      source={require("../assets/icons/chevron-right.png")}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                <Text className="text-RadicalRed font-bold text-center">
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
