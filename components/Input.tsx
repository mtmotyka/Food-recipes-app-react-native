import * as React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  Image,
} from "react-native";
import { robotoWeights } from "react-native-typography";
import { useState } from "react";
import { theme } from "../constants/theme";
import { Icon } from "../types/icon.type";

type Props = {
  icon?: Icon;
} & TextInputProps;

const Input: React.FC<Props> = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.inputContainer}>
      {props.icon && (
        <View style={styles.iconContainer}>
          <Image
            source={props.icon.url}
            style={{ width: props.icon.width, height: props.icon.height }}
          />
        </View>
      )}
      <TextInput
        style={[
          styles.inputStyles,
          isFocused && styles.focusedInput,
          props.icon && styles.inputWithIcon,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={theme.colors.textSecondary}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputStyles: {
    fontSize: 15,
    color: theme.colors.text,
    borderColor: theme.colors.outline,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "solid",
    width: "100%",
    paddingVertical: 20,
    paddingRight: 25,
    marginBottom: 16,
  },

  iconContainer: {
    position: "absolute",
    left: 25,
    top: 20,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  input: {
    paddingLeft: 25,
  },

  inputWithIcon: {
    paddingLeft: 60,
  },

  focusedInput: {
    borderColor: theme.colors.primary,
  },
});
