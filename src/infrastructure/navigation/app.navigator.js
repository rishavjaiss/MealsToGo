import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantsNavigator from "./restaurants.navigator";
import SettingsNavigator from "./settings.navigator";
import MapScreen from "../../features/map/screens/map.screen";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Maps: "md-map",
    Settings: "md-settings",
  };

  const screenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ color, size }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Maps" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

export default AppNavigator;
