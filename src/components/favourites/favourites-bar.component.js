import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FavourtiesBar = ({ favourties }) => {
  return (
    <FavouritesWrapper>
      <ScrollView>Favourites</ScrollView>
    </FavouritesWrapper>
  );
};

export default FavourtiesBar;
