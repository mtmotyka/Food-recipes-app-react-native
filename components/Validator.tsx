import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { icons } from "../constants/icons";
import { commonStyles } from "../constants/styles";
import { theme } from "../constants/theme";

type Props = {
  passed: boolean;
  label: string;
};

const Validator: React.FC<Props> = ({ passed, label }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 24, height: 24 }}
        source={passed ? icons.validationGreen : icons.validationGray}
      />
      <Text style={passed ? styles.passedLabel : styles.label}>{label}</Text>
    </View>
  );
};

export default Validator;

const labelStyles = {
  ...commonStyles.text,
  color: theme.colors.textSecondary,
  marginLeft: 8,
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
  },
  label: {
    ...labelStyles,
  },

  passedLabel: {
    ...labelStyles,
    color: theme.colors.text,
  },
});
