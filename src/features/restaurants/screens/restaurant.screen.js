import React, { useContext } from "react";
import styled from "styled-components/native";
import { Colors } from "react-native-paper";
import { FlatList, TouchableOpacity, View } from "react-native";
import RestaurantsInfoCard from "../components/restaurant-info-card";
import { SafeAreaViewContainer } from "../../../components/utils/safe-area";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import SearchBox from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
const Loader = styled.ActivityIndicator`
  margin-left: -25px;
`;

export default function RestaurantsScreen({ navigation }) {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeAreaViewContainer>
      {isLoading && (
        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
          <Loader size={50} animating={true} color={Colors.blue300} />
        </View>
      )}
      <SearchBox />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("RestaurantDetails", item)}
          >
            <RestaurantsInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaViewContainer>
  );
}
