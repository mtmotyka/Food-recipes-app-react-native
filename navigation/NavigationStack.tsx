import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../constants/icons";
import { theme } from "../constants/theme";
import RegistrationScreen from "../screens/RegistrationScreen/RegistrationScreen";
import SearchResultsScreen from "../screens/SearchResultsScreen/SearchResultsScreen";
import StartScreen from "../screens/StartScreen/StartScreen";
import { SCREENS } from "./screens";
import NavItem from "../components/NavItem";

export type NavigationStackParams = {
  [SCREENS.START]: undefined;
  [SCREENS.TAB_NAVIGATOR]: undefined;
  [SCREENS.REGISTRATION_SCREEN]: undefined;
  [SCREENS.SEARCH_RESULTS_SCREEN]: undefined;
};

const ScanButton = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.shadow,
      {
        backgroundColor: theme.colors.primary,
        borderRadius: 50,
        width: 56,
        height: 56,
        top: -30,
        justifyContent: "center",
        alignItems: "center",
      },
    ]}
  >
    <View style={{ top: 8 }}>{children}</View>
  </TouchableOpacity>
);

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
      <Stack.Screen
        name={SCREENS.SEARCH_RESULTS_SCREEN}
        component={SearchResultsScreen}
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
          tabBarLabel: "Home",
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ focused }) => (
            <NavItem focused={focused} icon="home" />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={RegistrationScreen}
        options={{
          tabBarLabel: "Upload",
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ focused }) => (
            <NavItem focused={focused} icon="upload" />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={RegistrationScreen}
        options={{
          tabBarLabel: "Scan",
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ focused }) => (
            <NavItem focused={focused} icon="scan1" white iconSize={30} />
          ),
          tabBarButton: (props) => <ScanButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={RegistrationScreen}
        options={{
          tabBarLabel: "Notification",
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ focused }) => (
            <NavItem focused={focused} icon="notification" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={RegistrationScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ focused }) => (
            <NavItem focused={focused} icon="edit" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9.46,

    elevation: 9,
  },
  navigation: {
    height: 116,
    backgroundColor: "red",
  },
});
