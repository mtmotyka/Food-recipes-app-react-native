import * as React from "react";
import { StyleSheet, View, Text, Image, ImageProps } from "react-native";
import { images } from "../constants/images";
import { theme } from "../constants/theme";

type Props = {
  fullName: string;
};

const RecipeAuthor: React.FC<Props> = ({ fullName }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={images.avatar} />
      <Text style={styles.name}>{fullName}</Text>
    </View>
  );
};

export default RecipeAuthor;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  avatar: {
    width: 22,
    height: 22,
    borderRadius: 8,
  },

  name: {
    fontSize: 12,
    color: theme.colors.text,
    marginLeft: 8,
  },
});
