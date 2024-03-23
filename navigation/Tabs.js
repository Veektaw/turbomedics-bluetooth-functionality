import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Calender from "../screens/Calender";
import Documents from "../screens/Documents";
import Settings from "../screens/Settings";
import { View, Text, Image } from "react-native";

// const homeName = "home";
// const calenderName = "calender";
// const documentsName = "documents";
// const settingsName = "settings";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: false,
          // tabBarStyle: styles.tabBarStyle,
          // tabBarBackground: () => (
          //   <BlurView
          //     overlayColor=""
          //     blurAmount={15}
          //     style={styles.BlurViewStyles}
          //   />
          // ),
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="flex flex-col items-center justify-center">
                {focused ? (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/icons/home-b-blue-icon.png")}
                      style={{ width: 20, height: 20, marginBottom: 13 }}
                    />
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 9999,
                        backgroundColor: "#011D7E",
                      }}
                    ></View>
                  </View>
                ) : (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/icons/home-b-grey-icon.png")}
                      style={{ width: 20, height: 20, marginBottom: 13 }}
                    />
                    <Text className="font-light text-[10px]">Home</Text>
                  </View>
                )}
              </View>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="calender"
          component={Calender}
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="flex flex-col items-center justify-center">
                {focused ? (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/icons/calendar-b-blue-icon.png")}
                      style={{ width: 20, height: 20, marginBottom: 13 }}
                    />
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 9999,
                        backgroundColor: "#011D7E",
                      }}
                    ></View>
                  </View>
                ) : (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/icons/calendar-b-grey-icon.png")}
                      style={{ width: 20, height: 20, marginBottom: 13 }}
                    />
                    <Text className="font-light text-[10px]">Calender</Text>
                  </View>
                )}
              </View>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="documents"
          component={Documents}
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="flex flex-col items-center justify-center">
                {focused ? (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/icons/document-b-blue-icon.png")}
                      style={{ width: 20, height: 20, marginBottom: 10 }}
                    />
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 9999,
                        backgroundColor: "#011D7E",
                      }}
                    ></View>
                  </View>
                ) : (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/icons/document-b-grey-icon.png")}
                      style={{ width: 20, height: 20, marginBottom: 10 }}
                    />
                    <Text className="font-light text-[10px]">Documents</Text>
                  </View>
                )}
              </View>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="flex flex-col items-center justify-center">
                {focused ? (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/icons/setting-b-blue-icon.png")}
                      style={{ width: 20, height: 20, marginBottom: 10 }}
                    />
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 9999,
                        backgroundColor: "#011D7E",
                      }}
                    ></View>
                  </View>
                ) : (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/icons/setting-b-grey-icon.png")}
                      style={{ width: 20, height: 20, marginBottom: 10 }}
                    />
                    <Text className="font-light text-[10px]">Settings</Text>
                  </View>
                )}
              </View>
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default Tabs;
