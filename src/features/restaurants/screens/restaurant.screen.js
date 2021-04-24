import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Colors } from "react-native-paper";
import { FlatList, TouchableOpacity, View } from "react-native";
import RestaurantsInfoCard from "../components/restaurant-info-card";
import { SafeAreaViewContainer } from "../../../components/utils/safe-area";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import SearchBox from "../components/search.component";
import FavouritesBar from "../../../components/favourites/favourites-bar.component";
import { FadeInView } from "../../../components/animations/fade.animation";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
const Loader = styled.ActivityIndicator`
  margin-left: -25px;
`;

export default function RestaurantsScreen({ navigation }) {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeAreaViewContainer>
      {isLoading && (
        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
          <Loader size={50} animating={true} color={Colors.blue300} />
        </View>
      )}
      <SearchBox
        isFavouritesToggled={isToggled}
        onFavouritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          goToDetails={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("RestaurantDetails", item)}
          >
            <FadeInView>
              <RestaurantsInfoCard restaurant={item} />
            </FadeInView>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaViewContainer>
  );
}
