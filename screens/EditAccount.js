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

const EditAccount = () => {
  const navigation = useNavigation();
  

  return (
    <SafeAreaView className="bg-ResolutionBlue h-full text-white">
      <ScrollView className="bg-white">
        <View className="mx-4 py-4 space-y-6">
          <View className="flex flex-row items-center justify-between mb-4">
            <TouchableOpacity
              onPress={() => navigation.navigate("AccountInformations")}
              className="w-fit"
            >
              <Image
                className="w-6 h-6 rounded-full"
                source={require("../assets/icons/arrow-left.png")}
              />
            </TouchableOpacity>
            <Text className="font-bold text-xl">Edit Account</Text>
            <View className="w-fit bg-white">
              <Text className="p-2 rounded-full text-xs text-white">LA</Text>
            </View>
          </View>

          <View className="flex items-center">
            <Image
              className="w-24 h-24 bg-red-100 rounded-full"
              source={{
                uri: "https://lawal-akande.netlify.app/images/profilepic.jpeg",
              }}
            />
          </View>

          <View className="space-y-12">
            {/* Person Informations */}
            <View>
              <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                Personal
              </Text>
              <View className="space-y-3">
                <View className="space-y-1 px-3 py-4 border-b border-b-BlueChalk">
                  <Text className="text-BluishGrey font-light">First Name</Text>
                  <Text className="text-DarkJungleGreen font-bold">Daniel</Text>
                </View>
                <View className="space-y-1 px-3 py-4 border-b border-b-BlueChalk">
                  <Text className="text-BluishGrey font-light">Last Name</Text>
                  <Text className="text-DarkJungleGreen font-bold">Eloma</Text>
                </View>
                <View className="space-y-1 px-3 py-4 border-b border-b-BlueChalk">
                  <Text className="text-BluishGrey font-light">
                    Date of Birth
                  </Text>
                  <Text className="text-DarkJungleGreen font-bold">
                    Feb 12, 1994
                  </Text>
                </View>
                <View className="space-y-1 px-3 py-4 border-b border-b-BlueChalk">
                  <Text className="text-BluishGrey font-light">Gender</Text>
                  <Text className="text-DarkJungleGreen font-bold">Male</Text>
                </View>
                <View className="space-y-1 px-3 py-4 border-b border-b-BlueChalk">
                  <Text className="text-BluishGrey font-light">
                    Marital Status
                  </Text>
                  <Text className="text-DarkJungleGreen font-bold">Single</Text>
                </View>
              </View>
            </View>

            {/* Contact Informations */}
            <View>
              <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                Contact
              </Text>
              <View className="space-y-3">
                <View className=" space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                  <Text className="text-BluishGrey font-light">
                    Phone Number
                  </Text>
                  <Text className="text-DarkJungleGreen font-bold">
                    081892319321
                  </Text>
                </View>
                <View className=" space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                  <Text className="text-BluishGrey font-light">Email</Text>
                  <Text className="text-DarkJungleGreen font-bold">
                    danieleloma@gmail.com
                  </Text>
                </View>
                <View className=" space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                  <Text className="text-BluishGrey font-light">Street</Text>
                  <Text className="text-DarkJungleGreen font-bold">
                    House 9, Peace Estate, Baruwa
                  </Text>
                </View>
                <View className=" space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                  <Text className="text-BluishGrey font-light">City</Text>
                  <Text className="text-DarkJungleGreen font-bold">Ipaja</Text>
                </View>
                <View className=" space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                  <Text className="text-BluishGrey font-light">State</Text>
                  <Text className="text-DarkJungleGreen font-bold">Lagos</Text>
                </View>
                <View className=" space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                  <Text className="text-BluishGrey font-light">Zip Code</Text>
                  <Text className="text-DarkJungleGreen font-bold">100101</Text>
                </View>
                <View className=" space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                  <Text className="text-BluishGrey font-light">Country</Text>
                  <Text className="text-DarkJungleGreen font-bold">
                    Nigeria
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="w-full">
            <TouchableOpacity className="bg-ResolutionBlue py-4 rounded-3xl">
              <Text className="text-center text-white font-bold">
                Save changes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditAccount;
