import React, { useContext } from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import RestaurantsInfoCard from "../../restaurants/components/restaurant-info-card";
import { SafeAreaViewContainer } from "../../../components/utils/safe-area";
import { Text as CustomText } from "../../../components/typography/text";

const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
const NoFavouritesArea = styled.View`
  align-items: center;
`;

const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeAreaViewContainer>
      {favourites.length > 0 ? (
        <FavouritesList
          data={favourites}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantDetails", item)}
            >
              <RestaurantsInfoCard restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <NoFavouritesArea>
          <CustomText>No Favs yet!</CustomText>
        </NoFavouritesArea>
      )}
    </SafeAreaViewContainer>
  );
};

export default FavouritesScreen;
