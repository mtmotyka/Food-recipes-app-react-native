import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { robotoWeights } from "react-native-typography";
import { theme } from "../constants/theme";

type Props = {
  children: string;
  color?: "green" | "red";
  onPress: any;
};

const Button: React.FC<Props> = ({ children, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    backgroundColor: theme.colors.primary,
    fontSize: 15,
    paddingHorizontal: 120,
    paddingVertical: 19,
    textAlign: "center",
    width: "100%",
  },
  text: {
    color: "#fff",
    ...robotoWeights.bold,
  },
});
