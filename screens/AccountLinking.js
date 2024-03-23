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

const AccountLinking = () => {
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
            <Text className="font-bold text-xl">Account Linking</Text>
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
                Link Account
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
                Request
              </Text>
            </TouchableOpacity>
          </View>
          {openTab === 1 && (
            <View className="space-y-5">
              <View className="flex flex-row items-center justify-between border border-OlsoGrey_2 rounded-md px-2 py-2.5">
                <View className="flex items-center w-full">
                  <View>
                    <Image source={require("../assets/icons/Search.svg")} />
                  </View>
                  <TextInput
                    type="text"
                    name=""
                    id=""
                    className="bg-transparent w-full focus:outline-0 px-3 py-1 text-sm"
                    placeholder="Search for patient or hearth center"
                  />
                </View>
              </View>

              <View className="border border-OlsoGrey_2 rounded-3xl px-4 py-8">
                <Text className="font-semibold text-lg md:text-xl">
                  Linked Accounts
                </Text>
                <View className="overflow-x-auto py-6">
                  <View className="w-full">
                    <View className="flex flex-row">
                      <Text className="min-w-[150px] py-3 border-b border-red-200 text-left text-xs font-bold text-DarkJungleGreen">
                        Name
                      </Text>
                      <Text className="min-w-[100px] py-3 border-b border-gray-200 text-left text-xs font-bold text-DarkJungleGreen">
                        Relationship
                      </Text>
                      <Text className="pl-5 py-3 border-b border-gray-200 text-left text-xs font-bold text-DarkJungleGreen">
                        loo
                      </Text>
                    </View>

                    <View className="flex flex-row mb-4 font-light">
                      <View className="min-w-[150px] py-2.5 border-t border-gray-200 text-sm flex flex-row items-center cursor-pointer">
                        <View className="flex-shrink-0 w-7 h-7">
                          <Image
                            className="w-full h-full rounded-full object-cover"
                            source={{
                              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                            }}
                          />
                        </View>
                        <Text className="ml-1  text-DavyGrey whitespace-no-wrap">
                          Lawal Akande
                        </Text>
                      </View>
                      <View className="min-w-[100px] py-2.5 border-t border-gray-200 text-sm">
                        <Text className="text-DavyGrey border-gray-200 text-xs">
                          Law 1
                        </Text>
                      </View>
                      <TouchableOpacity className="pl-5 py-2.5 border-t border-gray-200 text-right">
                        <Text className="text-ArtyClickRed border border-ArtyClickRed py-1 rounded-3xl text-xs font-medium hover:border-ArtyClickRed hover:bg-ArtyClickRed hover:text-white transition-all duration-300 w-16">
                          unlink
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
          {openTab === 2 && (
            <View className="border border-OlsoGrey_2 rounded-3xl px-4 py-8">
              <View className="w-44 flex flex-row items-center justify-center mb-4 bg-BlueChalk p-2 rounded-3xl">
                <TouchableOpacity
                  onPress={() => toggleRequest(1)}
                  className={` py-1 px-4 rounded-sm ${
                    openRequest === 1
                      ? "bg-ResolutionBlue py-1 rounded-2xl"
                      : ""
                  }`}
                >
                  <Text
                    className={`text-center text-sm ${
                      openRequest === 1 ? "text-white" : "text-black"
                    }`}
                  >
                    Received
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => toggleRequest(2)}
                  className={` py-1 px-4 rounded-sm ${
                    openRequest === 2
                      ? "bg-ResolutionBlue py-1 rounded-2xl"
                      : ""
                  }`}
                >
                  <Text
                    className={`text-center text-sm ${
                      openRequest === 2 ? "text-white" : "text-black"
                    }`}
                  >
                    Sent
                  </Text>
                </TouchableOpacity>
              </View>

              {openRequest === 1 && (
                <View>
                  <View className="py-4 border-b border-b-iron">
                    <View className="flex flex-row space-x-3">
                      <Image
                        className="w-9 h-9 rounded-full object-cover"
                        source={{
                          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                        }}
                      />
                      <View>
                        <Text>
                          Tobi Eloma invited you to be linked as their Father
                        </Text>
                        <View className="flex flex-row items-center">
                          <Text className="text-xs text-SantaGrey">
                            Thurs 21, 2023
                          </Text>
                          <Text className="text-SantaGrey">・</Text>
                          <Text className="text-xs text-SantaGrey">
                            10:00 am
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View className="flex flex-row justify-center items-center space-x-3 pt-2">
                      <TouchableOpacity className="bg-ResolutionBlue rounded-3xl">
                        <Text className="text-white px-3 py-2 font-medium">
                          Accept
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="border border-BluishGrey rounded-3xl">
                        <Text className="text-DarkJungleGrenn px-3 py-2 font-medium">
                          Decline
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View className="py-4 border-b border-b-iron">
                    <View className="flex flex-row space-x-3">
                      <Image
                        className="w-9 h-9 rounded-full object-cover"
                        source={{
                          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                        }}
                      />
                      <View>
                        <Text>
                          Tobi Eloma invited you to be linked as their Father
                        </Text>
                        <View className="flex flex-row items-center">
                          <Text className="text-xs text-SantaGrey">
                            Thurs 21, 2023
                          </Text>
                          <Text className="text-SantaGrey">・</Text>
                          <Text className="text-xs text-SantaGrey">
                            10:00 am
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View className="flex flex-row justify-center items-center space-x-3 pt-2">
                      <TouchableOpacity className="bg-ResolutionBlue rounded-3xl">
                        <Text className="text-white px-3 py-2 font-medium">
                          Accept
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="border border-BluishGrey rounded-3xl">
                        <Text className="text-DarkJungleGrenn px-3 py-2 font-medium">
                          Decline
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View className="py-4 border-b border-b-iron">
                    <View className="flex flex-row space-x-3">
                      <Image
                        className="w-9 h-9 rounded-full object-cover"
                        source={{
                          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                        }}
                      />
                      <View>
                        <Text>
                          Tobi Eloma invited you to be linked as their Father
                        </Text>
                        <View className="flex flex-row items-center">
                          <Text className="text-xs text-SantaGrey">
                            Thurs 21, 2023
                          </Text>
                          <Text className="text-SantaGrey">・</Text>
                          <Text className="text-xs text-SantaGrey">
                            10:00 am
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View className="flex flex-row justify-center items-center space-x-3 pt-2">
                      <TouchableOpacity className="bg-ResolutionBlue rounded-3xl">
                        <Text className="text-white px-3 py-2 font-medium">
                          Accept
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="border border-BluishGrey rounded-3xl">
                        <Text className="text-DarkJungleGrenn px-3 py-2 font-medium">
                          Decline
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View className="py-4 border-b border-b-iron">
                    <View className="flex flex-row space-x-3">
                      <Image
                        className="w-9 h-9 rounded-full object-cover"
                        source={{
                          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                        }}
                      />
                      <View>
                        <Text>
                          Tobi Eloma invited you to be linked as their Father
                        </Text>
                        <View className="flex flex-row items-center">
                          <Text className="text-xs text-SantaGrey">
                            Thurs 21, 2023
                          </Text>
                          <Text className="text-SantaGrey">・</Text>
                          <Text className="text-xs text-SantaGrey">
                            10:00 am
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View className="flex flex-row justify-center items-center space-x-3 pt-2">
                      <TouchableOpacity className="bg-ResolutionBlue rounded-3xl">
                        <Text className="text-white px-3 py-2 font-medium">
                          Accept
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="border border-BluishGrey rounded-3xl">
                        <Text className="text-DarkJungleGrenn px-3 py-2 font-medium">
                          Decline
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View className="py-4 border-b border-b-iron">
                    <View className="flex flex-row space-x-3">
                      <Image
                        className="w-9 h-9 rounded-full object-cover"
                        source={{
                          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                        }}
                      />
                      <View>
                        <Text>
                          Tobi Eloma invited you to be linked as their Father
                        </Text>
                        <View className="flex flex-row items-center">
                          <Text className="text-xs text-SantaGrey">
                            Thurs 21, 2023
                          </Text>
                          <Text className="text-SantaGrey">・</Text>
                          <Text className="text-xs text-SantaGrey">
                            10:00 am
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View className="flex flex-row justify-center items-center space-x-3 pt-2">
                      <TouchableOpacity className="bg-ResolutionBlue rounded-3xl">
                        <Text className="text-white px-3 py-2 font-medium">
                          Accept
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="border border-BluishGrey rounded-3xl">
                        <Text className="text-DarkJungleGrenn px-3 py-2 font-medium">
                          Decline
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
              {openRequest === 2 && (
                <View>
                  <View className="py-4 border-b border-b-iron">
                    <View className="flex flex-row space-x-3">
                      <Image
                        className="w-9 h-9 rounded-full object-cover"
                        source={{
                          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                        }}
                      />
                      <View>
                        <Text>
                          You invited{" "}
                          <Text className="text-ResolutionBlue font-bold">
                            Tobi Eloma
                          </Text>{" "}
                          to be linked as your{" "}
                          <Text className="text-DarkJungleGrenn font-bold">
                            Father
                          </Text>
                        </Text>
                        <View className="flex flex-row items-center">
                          <Text className="text-xs text-SantaGrey">
                            Thurs 21, 2023
                          </Text>
                          <Text className="text-SantaGrey">・</Text>
                          <Text className="text-xs text-SantaGrey">
                            10:00 am
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View className="flex flex-row justify-center items-center space-x-3 pt-2">
                      <TouchableOpacity className="bg-SaffronMango rounded-3xl">
                        <Text className="text-white px-3 py-2 font-medium">
                          Pending
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="border border-BluishGrey rounded-3xl">
                        <Text className="text-DarkJungleGrenn px-3 py-2 font-medium">
                          Cancel
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountLinking;
