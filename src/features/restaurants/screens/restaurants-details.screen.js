import React, { useState, useContext } from "react";
import RestaurantsInfoCard from "../components/restaurant-info-card";
import { List, Button } from "react-native-paper";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { CartContext } from "../../../services/cart/cart.context";

const OrderButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

const RestaurantDetailsScreen = ({ navigation, route }) => {
  const item = route.params;
  const { setRestaurant, setCart } = useContext(CartContext);
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <>
      <RestaurantsInfoCard restaurant={item} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
        <View style={{ margin: 20 }}>
          <OrderButton
            icon="cash-usd"
            mode="contained"
            onPress={() => {
              setCart({ item: "Special", price: 1299 });
              setRestaurant(item);
              navigation.navigate("Checkout");
            }}
          >
            Order Special only $12.99!
          </OrderButton>
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantDetailsScreen;
