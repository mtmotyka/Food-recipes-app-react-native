import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ResultsGrid from "../../components/ResultsGrid";
import getRandomRecipes from "../../lib/api";

type Props = {};

const SearchResultsScreen: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function callAPI() {
      const res = await getRandomRecipes();
      setData(res.recipes);
    }

    callAPI();
  }, []);
  return (
    <View>
      <ResultsGrid data={data} />
    </View>
  );
};

export default SearchResultsScreen;
