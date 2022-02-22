import { StyleSheet } from "react-native";
import { theme } from "./theme";
import { robotoWeights } from "react-native-typography";

export const commonStyles = StyleSheet.create({
  title: { ...robotoWeights.bold, fontSize: 22 },
  sectionTitle: { ...robotoWeights.bold, fontSize: 17 },
  text: { ...robotoWeights.regular, fontSize: 15 },
  divider: {
    borderBottomColor: theme.colors.backgroundSecondary,
    borderBottomWidth: 8,
    borderStyle: "solid",
  },
});
