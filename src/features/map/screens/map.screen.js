import React, { useContext } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import SearchBox from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = () => {
  const { restaurants = [] } = useContext(RestaurantsContext);
  const { location } = useContext(LocationContext);
  return (
    <>
      <SearchBox />
      <Map />
    </>
  );
};

export default MapScreen;
