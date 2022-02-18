import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import RegistrationScreen from "../screens/RegistrationScreen/RegistrationScreen";
import StartScreen from "../screens/StartScreen/StartScreen";
import { SCREENS } from "./screens";

export type NavigationStackParams = {
  [SCREENS.START]: undefined;
  [SCREENS.TAB_NAVIGATOR]: undefined;
  [SCREENS.REGISTRATION_SCREEN]: undefined;
};

const NavigationStack = () => {
  const Stack = createNativeStackNavigator<NavigationStackParams>();
  return (
    <Stack.Navigator initialRouteName={SCREENS.TAB_NAVIGATOR}>
      <Stack.Screen
        name={SCREENS.TAB_NAVIGATOR}
        component={TabNavigator}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name={SCREENS.START}
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREENS.REGISTRATION_SCREEN}
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={SCREENS.START}
        component={StartScreen}
        options={{
          tabBarLabel: "Główna",
        }}
      />
    </Tab.Navigator>
  );
};
