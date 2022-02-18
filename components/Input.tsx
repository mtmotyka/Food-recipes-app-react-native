import * as React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  Image,
} from "react-native";
import { robotoWeights } from "react-native-typography";
import { theme } from "../constants/theme";

type Props = {
  icon?: any;
} & TextInputProps;

const Input: React.FC<Props> = ({
  onChange,
  defaultValue,
  placeholder,
  icon,
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={{ padding: 10 }} />
      </View>
      <TextInput
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        style={icon ? styles.inputWithIcon : styles.input}
        placeholderTextColor={theme.colors.textSecondary}
      />
    </View>
  );
};

const inputStyles = {
  fontSize: 15,
  color: theme.colors.textSecondary,
  borderColor: theme.colors.outline,
  borderRadius: 50,
  borderWidth: 1,
  borderStyle: "solid",
  width: "100%",
  paddingVertical: 20,
  paddingRight: 25,
};

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    left: 25,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  input: {
    ...inputStyles,
    paddingLeft: 25,
  },

  inputWithIcon: {
    ...inputStyles,
    paddingLeft: 60,
  },
});

export default Input;
