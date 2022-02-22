import * as React from "react";
import { Image, ImageProps, StyleSheet, Text, View } from "react-native";
import { robotoWeights } from "react-native-typography";
import { commonStyles } from "../constants/styles";
import { theme } from "../constants/theme";
import RecipeAuthor from "./RecipeAuthor";

type Props = {
  name: string;
  time: number;
  cuisines: string;
  image: any;
  id: number;
  author: string;
  vegan: boolean;
};

const RecipeTile: React.FC<Props> = ({
  name,
  time,
  cuisines,
  image,
  id,
  author,
  vegan,
}) => {
  return (
    <View style={styles.tile}>
      <RecipeAuthor fullName={author} />
      <View style={styles.imgContainer}>
        <Image source={image} style={styles.img} />
      </View>
      <View>
        <Text style={styles.title}>
          {name.substring(0, 12)}
          {name.length > 15 && "..."}
        </Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            {cuisines ? cuisines : "Not provided"}
          </Text>
          <Text style={[styles.infoText, styles.dot]}>&#8226;</Text>
          <Text style={styles.infoText}>{time} mins</Text>
        </View>
      </View>
    </View>
  );
};

export default RecipeTile;

const styles = StyleSheet.create({
  tile: {
    marginBottom: 42,
  },
  imgContainer: {
    borderRadius: 16,
    marginVertical: 16,
  },
  img: {
    borderRadius: 16,
    width: "100%",
    height: 150,
  },
  dot: {
    marginHorizontal: 5,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    ...robotoWeights.bold,
    marginBottom: 8,
    fontSize: 17,
    color: theme.colors.text,
  },
  infoText: {
    color: theme.colors.textSecondary,
    fontSize: 12,
  },
});
