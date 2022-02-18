import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import { theme } from "./constants/theme";
import NavigationStack from "./navigation/NavigationStack";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar />
        <NavigationContainer theme={theme}>
          <NavigationStack />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
