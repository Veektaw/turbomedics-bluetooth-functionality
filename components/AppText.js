import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
const AppText = ({ children, className, ...rest }) => {
  const [fontsLoaded, error] = useFonts({
    "Urbanist-Regular": require("../assets/fonts/Urbanist-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text className={`font-urbanist ${className}`} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({});
