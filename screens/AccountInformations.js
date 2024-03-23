import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const AccountInformations = () => {
  const navigate = useNavigation();

  const [openTab, setOpenTab] = useState(1);
  const [openBasicInfo, setOpenBasicInfo] = useState(true);
  const [residentialAddressOne, setResidentialAddressOne] = useState(false);
  const [openContactInfo, setOpenContactInfo] = useState(false);
  const [spokenLanguages, setSpokenLanguages] = useState(false);
  const [emergencyContactOne, setEmergencyContactOne] = useState(false);
  const [emergencyContactTwo, setEmergencyContactTwo] = useState(false);
  const [primaryCarePhysician, setPrimaryCarePhysician] = useState(true);
  const [medicalHistory, setMedicalHistory] = useState(false);

  const toggleTabs = (tab) => {
    setOpenTab(tab);
  };
  // arrow-left
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
            <Text className="font-bold text-xl">Account Information</Text>
            <TouchableOpacity
              className="w-fit bg-WhiteLilac p-3 rounded-full"
              onPress={() => navigate.navigate("EditAccount")}
            >
              <View>
                <Image
                  className="w-6 h-6 rounded-full"
                  source={require("../assets/icons/edit-profile-icon.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex items-center">
            <Image
              className="w-24 h-24 bg-red-100 rounded-full"
              source={{
                uri: "https://lawal-akande.netlify.app/images/profilepic.jpeg",
              }}
            />
          </View>

          <View className="space-y-2">
            {/* Person Informations */}

            <View className="flex flex-row items-center justify-center mb-4">
              <View className="flex flex-row bg-WhiteLilac justify-center items-center py-1.5 px-2.5 space-x-2 rounded-sm">
                <TouchableOpacity
                  onPress={() => toggleTabs(1)}
                  className={`py-1 px-4 rounded-sm ${
                    openTab === 1 ? "bg-ResolutionBlue" : ""
                  }`}
                >
                  <Text
                    className={`text-sm ${
                      openTab === 1 ? "text-white" : "text-black"
                    }`}
                  >
                    Personal
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => toggleTabs(2)}
                  className={`py-1 px-4 rounded-sm ${
                    openTab === 2 ? "bg-ResolutionBlue" : ""
                  }`}
                >
                  <Text
                    className={`text-sm ${
                      openTab === 2 ? "text-white" : "text-black"
                    }`}
                  >
                    Medical
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {openTab === 1 && (
              <View>
                {/* Basic */}
                <TouchableOpacity
                  className={
                    openBasicInfo !== true && "border-b border-b-BlueChalk mb-1"
                  }
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onPress={() => setOpenBasicInfo(!openBasicInfo)}
                >
                  <Text className="font-semibold text-base text-OlsoGrey mb-3">
                    Basic
                  </Text>
                  <View>
                    <Image
                      className="w-4 h-4"
                      source={require("../assets/icons/arrow-left.png")}
                      style={{
                        transform: [
                          { rotate: openBasicInfo ? "90deg" : "180deg" },
                        ],
                        transitionProperty: "transform",
                        transitionDuration: "700ms",
                      }}
                    />
                  </View>
                </TouchableOpacity>
                {openBasicInfo && (
                  <View className="space-y-3">
                    <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                      <Text className="text-BluishGrey font-light">Mr</Text>
                      <Text className="text-DarkJungleGreen font-bold">--</Text>
                    </View>
                    <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                      <Text className="text-BluishGrey font-light">
                        First Name
                      </Text>
                      <Text className="text-DarkJungleGreen font-bold">
                        Daniel
                      </Text>
                    </View>
                    <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                      <Text className="text-BluishGrey font-light">
                        Last Name
                      </Text>
                      <Text className="text-DarkJungleGreen font-bold">
                        Eloma
                      </Text>
                    </View>
                    <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                      <Text className="text-BluishGrey font-light">
                        User Name
                      </Text>
                      <Text className="text-DarkJungleGreen font-bold">
                        Eloma
                      </Text>
                    </View>
                    <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                      <Text className="text-BluishGrey font-light">
                        Date of Birth
                      </Text>
                      <Text className="text-DarkJungleGreen font-bold">
                        Feb 12, 1994
                      </Text>
                    </View>
                    <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                      <Text className="text-BluishGrey font-light">Age</Text>
                      <Text className="text-DarkJungleGreen font-bold">20</Text>
                    </View>
                    <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                      <Text className="text-BluishGrey font-light">Gender</Text>
                      <Text className="text-DarkJungleGreen font-bold">
                        Male
                      </Text>
                    </View>
                    <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                      <Text className="text-BluishGrey font-light">
                        Marital Status
                      </Text>
                      <Text className="text-DarkJungleGreen font-bold">
                        Single
                      </Text>
                    </View>
                  </View>
                )}

                {/* Residential Address 1 */}
                <TouchableOpacity
                  className={
                    residentialAddressOne !== true &&
                    "border-b border-b-BlueChalk mb-1"
                  }
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onPress={() =>
                    setResidentialAddressOne(!residentialAddressOne)
                  }
                >
                  <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                    Residential Address 1
                  </Text>
                  <View>
                    <Image
                      className="w-4 h-4"
                      source={require("../assets/icons/arrow-left.png")}
                      style={{
                        transform: [
                          {
                            rotate: residentialAddressOne ? "90deg" : "180deg",
                          },
                        ],
                        transitionProperty: "transform",
                        transitionDuration: "700ms",
                      }}
                    />
                  </View>
                </TouchableOpacity>
                {residentialAddressOne && (
                  <View>
                    <View className="space-y-3">
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">
                          Address
                        </Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          --
                        </Text>
                      </View>
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">
                          State
                        </Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          --
                        </Text>
                      </View>
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">City</Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          --
                        </Text>
                      </View>
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">
                          Country
                        </Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          Nigeria
                        </Text>
                      </View>
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">
                          Zip Code
                        </Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          --
                        </Text>
                      </View>
                    </View>
                  </View>
                )}

                {/* Contact Informations */}
                <TouchableOpacity
                  className={
                    openContactInfo !== true &&
                    "border-b border-b-BlueChalk mb-1"
                  }
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onPress={() => setOpenContactInfo(!openContactInfo)}
                >
                  <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                    Contact
                  </Text>
                  <View>
                    <Image
                      className="w-4 h-4"
                      source={require("../assets/icons/arrow-left.png")}
                      style={{
                        transform: [
                          { rotate: openContactInfo ? "90deg" : "180deg" },
                        ],
                        transitionProperty: "transform",
                        transitionDuration: "700ms",
                      }}
                    />
                  </View>
                </TouchableOpacity>
                {openContactInfo && (
                  <View>
                    <View className="space-y-3">
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">
                          Phone Number
                        </Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          081892319321
                        </Text>
                      </View>
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">
                          Email
                        </Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          danieleloma@gmail.com
                        </Text>
                      </View>
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">
                          Street
                        </Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          House 9, Peace Estate, Baruwa
                        </Text>
                      </View>
                    </View>
                  </View>
                )}

                {/*  Spoken Languages */}
                <TouchableOpacity
                  className={
                    spokenLanguages !== true &&
                    "border-b border-b-BlueChalk mb-1"
                  }
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onPress={() => setSpokenLanguages(!spokenLanguages)}
                >
                  <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                    Spoken Languages
                  </Text>
                  <View>
                    <Image
                      className="w-4 h-4"
                      source={require("../assets/icons/arrow-left.png")}
                      style={{
                        transform: [
                          { rotate: spokenLanguages ? "90deg" : "180deg" },
                        ],
                        transitionProperty: "transform",
                        transitionDuration: "700ms",
                      }}
                    />
                  </View>
                </TouchableOpacity>
                {spokenLanguages && (
                  <View>
                    <View className="space-y-3">
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">
                          Language
                        </Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          --
                        </Text>
                      </View>
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">
                          Language Proficiency
                        </Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          --
                        </Text>
                      </View>
                    </View>
                  </View>
                )}

                {/* Emergency Contact (1) */}
                <TouchableOpacity
                  className={
                    emergencyContactOne !== true &&
                    "border-b border-b-BlueChalk mb-1"
                  }
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onPress={() => setEmergencyContactOne(!emergencyContactOne)}
                >
                  <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                    Emergency Contact (1)
                  </Text>
                  <View>
                    <Image
                      className="w-4 h-4"
                      source={require("../assets/icons/arrow-left.png")}
                      style={{
                        transform: [
                          { rotate: emergencyContactOne ? "90deg" : "180deg" },
                        ],
                        transitionProperty: "transform",
                        transitionDuration: "700ms",
                      }}
                    />
                  </View>
                </TouchableOpacity>
                {emergencyContactOne && (
                  <View>
                    <View className="space-y-3">
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">Name</Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          --
                        </Text>
                      </View>
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">
                          Relationship
                        </Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          --
                        </Text>
                      </View>
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">
                          Phone Number (Primary)
                        </Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          --
                        </Text>
                      </View>
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">
                          Phone Number (Secondary)
                        </Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          --
                        </Text>
                      </View>
                    </View>
                  </View>
                )}

                {/*    Emergency Contact (2) */}
                <TouchableOpacity
                  className={
                    emergencyContactTwo !== true &&
                    "border-b border-b-BlueChalk mb-1"
                  }
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onPress={() => setEmergencyContactTwo(!emergencyContactTwo)}
                >
                  <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                    Emergency Contact (2)
                  </Text>
                  <View>
                    <Image
                      className="w-4 h-4"
                      source={require("../assets/icons/arrow-left.png")}
                      style={{
                        transform: [
                          { rotate: emergencyContactTwo ? "90deg" : "180deg" },
                        ],
                        transitionProperty: "transform",
                        transitionDuration: "700ms",
                      }}
                    />
                  </View>
                </TouchableOpacity>
                {emergencyContactTwo && (
                  <View>
                    <View className="space-y-3">
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">Name</Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          --
                        </Text>
                      </View>
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">
                          Relationship
                        </Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          --
                        </Text>
                      </View>
                      <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                        <Text className="text-BluishGrey font-light">
                          Language(s) of Communication
                        </Text>
                        <Text className="text-DarkJungleGreen font-bold">
                          --
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            )}
            {openTab === 2 && (
              <View>
                <View>
                  {/* General Info */}
                  <TouchableOpacity
                    className={
                      primaryCarePhysician !== true &&
                      "border-b border-b-BlueChalk mb-2"
                    }
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    onPress={() =>
                      setPrimaryCarePhysician(!primaryCarePhysician)
                    }
                  >
                    <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                      General Info
                    </Text>

                    <View>
                      <Image
                        className="w-4 h-4"
                        source={require("../assets/icons/arrow-left.png")}
                        style={{
                          transform: [
                            {
                              rotate: primaryCarePhysician ? "90deg" : "180deg",
                            },
                          ],
                          transitionProperty: "transform",
                          transitionDuration: "700ms",
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                  {primaryCarePhysician && (
                    <View className="space-y-3">
                      <View className="space-y-2.5">
                        <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                          Primary Care Physician
                        </Text>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Primary Care Physician's Name
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Hospital
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Phone Number
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Email
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                      </View>
                      <View className="space-y-2.5">
                        <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                          Preferred Hospital/ Frequently Visited Hospital
                        </Text>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Hospital Name
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Country
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            City
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            State
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Street
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            ZIP Code
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Phone number
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                      </View>
                    </View>
                  )}
                </View>

                <View>
                  {/* General Info */}
                  <TouchableOpacity
                    className={
                      medicalHistory !== true &&
                      "border-b border-b-BlueChalk mb-1"
                    }
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    onPress={() => setMedicalHistory(!medicalHistory)}
                  >
                    <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                      Medical History
                    </Text>

                    <View>
                      <Image
                        className="w-4 h-4"
                        source={require("../assets/icons/arrow-left.png")}
                        style={{
                          transform: [
                            {
                              rotate: medicalHistory ? "90deg" : "180deg",
                            },
                          ],
                          transitionProperty: "transform",
                          transitionDuration: "700ms",
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                  {medicalHistory && (
                    <View className="space-y-3">
                      <View className="space-y-2.5">
                        {/* <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                          Primary Care Physician
                        </Text> */}
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Height
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Weight
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Blood group
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Diabetes type
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Date of Diabetes Diagnosis
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Insulin Dosage (if applicable)
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                      </View>
                      <View className="space-y-2.5">
                        <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                          Chronic Diseases
                        </Text>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Disease 1
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Date of Diagnosis
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Current Medications
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Disease 2
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Date of Diagnosis
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Current Medications
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Disease 3
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Date of Diagnosis
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Current Medications
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                      </View>
                      <View className="space-y-2.5">
                        <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                          Surgical History
                        </Text>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Surgery 1
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Date of Surgery
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Reason for Surgery
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Surgery 2
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Date of Surgery
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Reason for Surgery
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Surgery 3
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Date of Surgery
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Reason for Surgery
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                      </View>
                      <View className="space-y-2.5">
                        <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                          Allergies
                        </Text>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Allergy 1
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Allergy 2
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Allergy 3
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Allergy 4
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                      </View>
                      <View className="space-y-2.5">
                        <Text className="font-semibold text-base text-OlsoGrey_2 mb-3">
                          Other Medications (excluding diabetic drugs)
                        </Text>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Medication 1
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Dosage 1
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Medication 2
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Dosage 2
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Medication 3
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                        <View className="bg-WhiteLilac space-y-1 px-2 py-4 border-b border-b-BlueChalk">
                          <Text className="text-BluishGrey font-light">
                            Dosage 3
                          </Text>
                          <Text className="text-DarkJungleGreen font-bold">
                            --
                          </Text>
                        </View>
                      </View>
                    </View>
                  )}
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountInformations;
