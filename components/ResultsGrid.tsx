import React from "react";
import { StyleSheet, View } from "react-native";
import RecipeTile from "./RecipeTile";

type Props = {
  data: any;
};

const ResultsGrid: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <View style={styles.grid}>
      {data &&
        data.map((item: any) => (
          <View style={styles.tileWrapper}>
            <RecipeTile
              name={item.title}
              time={item.readyInMinutes}
              cuisines={item.cuisines[0]}
              image={item.image}
              id={item.id}
              author={item.sourceName}
              vegan={item.vegan}
            />
          </View>
        ))}
    </View>
  );
};

export default ResultsGrid;

const styles = StyleSheet.create({
  grid: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
  },

  tileWrapper: {
    width: "50%",
    paddingHorizontal: 12,
  },
});
