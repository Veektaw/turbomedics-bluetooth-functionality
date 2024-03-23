import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./navigation/Tabs";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import OnboardingScreen from "./screens/OnboardingScreen";
// import Home from "./screens/Home";
// import Settings from "./screens/Settings";
// import AccountInformations from "./screens/AccountInformations";
import EditAccount from "./screens/EditAccount";
import Devices from "./screens/Devices";
import ReportAndStatistics from "./screens/ReportAndStatistics";
import AccountLinking from "./screens/AccountLinking";
import SecurityAndPreferences from "./screens/SecurityAndPreferences";
// import Documents from "./screens/Documents";
// import Calender from "./screens/Calender";
import AccountInformations from "./screens/AccountInformations";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Devices" component={Devices} />
        <Stack.Screen name="ReportAndStatistics" component={ReportAndStatistics} />
        <Stack.Screen name="AccountLinking" component={AccountLinking} />
        <Stack.Screen name="SecurityAndPreferences" component={SecurityAndPreferences} />
        <Stack.Screen name="EditAccount" component={EditAccount} />
        <Stack.Screen
          name="AccountInformations"
          component={AccountInformations}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
