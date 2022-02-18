import * as React from "react";
import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { robotoWeights } from "react-native-typography";
import Input from "../../components/Input";
import { icons } from "../../constants/icons";
import { theme } from "../../constants/theme";

const RegistrationScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.topTextContainer}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.normalText}>Please enter your account here</Text>
      </View>
      <View style={styles.inputsContainer}>
        <Input
          placeholder="Email"
          defaultValue={email}
          onChangeText={(newText) => setEmail(newText)}
          icon={icons.email}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  topTextContainer: {
    paddingTop: 150,
    paddingBottom: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  },

  title: {
    ...robotoWeights.bold,
    fontSize: 22,
    marginBottom: 10,
    color: theme.colors.text,
  },

  normalText: {
    ...robotoWeights.regular,
    fontSize: 15,
    color: theme.colors.textSecondary,
  },

  inputsContainer: {
    width: "100%",
    paddingHorizontal: 24,
  },
});
