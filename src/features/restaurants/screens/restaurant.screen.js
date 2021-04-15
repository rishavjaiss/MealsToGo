import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import RestaurantsInfoCard from "../components/restaurant-info-card";
import { SafeAreaViewContainer } from "../../../components/utils/safe-area";

const SearchBoxContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export default function RestaurantsScreen() {
  return (
    <SafeAreaViewContainer>
      <SearchBoxContainer>
        <Searchbar />
      </SearchBoxContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
        ]}
        renderItem={() => <RestaurantsInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaViewContainer>
  );
}
