import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { View, StyleSheet, SafeAreaView, Image, Text } from "react-native";
import Button from "../../components/Button";
import { images } from "../../constants/images";
import { theme } from "../../constants/theme";
import { SCREENS } from "../../navigation/screens";

type Props = {
  navigation: any;
};

const StartScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.imgContainer}>
        <Image source={images.welcome} style={styles.mainImg} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Start Cooking</Text>
        <Text style={styles.text}>
          Let’s join our community to cook better food!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate(SCREENS.REGISTRATION_SCREEN)}
        >
          Get Started
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mainImg: {
    width: 420,
    height: 420,
    margin: "0 auto",
  },

  buttonContainer: {
    paddingHorizontal: 15,
  },

  textContainer: {
    paddingHorizontal: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 50,
    paddingBottom: 90,
    textAlign: "center",
  },

  text: {
    textAlign: "center",
    color: theme.colors.textSecondary,
    fontSize: 17,
    fontWeight: "400",
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    color: theme.colors.text,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
