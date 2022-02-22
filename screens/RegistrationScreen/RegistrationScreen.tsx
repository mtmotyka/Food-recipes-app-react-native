import * as React from "react";
import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { robotoWeights } from "react-native-typography";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Validator from "../../components/Validator";
import { icons } from "../../constants/icons";
import { theme } from "../../constants/theme";
import { SCREENS } from "../../navigation/screens";

const RegistrationScreen: React.FC = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.topTextContainer}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.normalText}>Please enter your account here</Text>
      </View>
      <View style={styles.inputsContainer}>
        <Input
          placeholder="Email"
          defaultValue={email}
          onChangeText={(newText) => setEmail(newText)}
          icon={{ url: icons.email, width: 25, height: 22 }}
        />
        <Input
          placeholder="Password"
          defaultValue={password}
          onChangeText={(newText) => setPassword(newText)}
          icon={{ url: icons.lock, width: 19, height: 22 }}
          secureTextEntry
        />
      </View>
      <View style={styles.validationContainer}>
        <Text style={styles.validationTitle}>Your Password must contain:</Text>
        <View>
          <Validator
            label="Atleast 8 characters"
            passed={password.length >= 8}
          />
          <Validator label="Contains a number" passed={/\d/.test(password)} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate(SCREENS.SEARCH_RESULTS_SCREEN)}
        >
          Sign Up
        </Button>
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

  validationContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 24,
  },

  validationTitle: {
    ...robotoWeights.bold,
    color: theme.colors.text,
    fontSize: 15,
    marginTop: 35,
    marginBottom: 16,
  },

  buttonContainer: {
    paddingHorizontal: 24,
    width: "100%",
    marginTop: 25,
  },
});
