import React from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import CompactRestaurantInfo from "../../features/map/components/compact-restaurant-info";
import { Text as CustomText } from "../typography/text";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FavourtiesBar = ({ favourites, goToDetails }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <View style={{ marginLeft: 10 }}>
        <CustomText variant="caption">Favourites</CustomText>
      </View>
      <ScrollView horizontal>
        {favourites.map((restaurant) => (
          <View style={{ marginRight: 15 }} key={restaurant.placeId}>
            <TouchableOpacity
              onPress={() => goToDetails("RestaurantDetails", restaurant)}
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavourtiesBar;
