import React, { useContext, useState } from "react";
import { View } from "react-native";
import { SafeAreaViewContainer } from "../../../components/utils/safe-area";
import CreditCardInput from "../components/credit-card";
import RestaurantsInfoCard from "../../restaurants/components/restaurant-info-card";
import { CartContext } from "../../../services/cart/cart.context";
import { Text as CustomText } from "../../../components/typography/text";
import { payRequest } from "../../../services/checkout/checkout.service";
import {
  PayButton,
  ClearCartButton,
  CartIconContainer,
  CartIcon,
  CardDetailsContainer,
  NameInput,
} from "../components/checkout.styles";

const CheckoutScreen = () => {
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const { restaurant, setRestaurant, cart } = useContext(CartContext);
  const hasRestaurant = Object.keys(restaurant).length > 0;

  const onPay = () => {
    if (!card) {
      alert("Fill payment details!");
    } else {
      const amount = cart.price / 100;
      console.log(card.id, amount, name);
      payRequest(card.id, amount, name);
    }
  };

  return (
    <SafeAreaViewContainer>
      {!hasRestaurant ? (
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <CustomText variant="hint">Your cart is empty!</CustomText>
        </CartIconContainer>
      ) : (
        <>
          <RestaurantsInfoCard restaurant={restaurant} />
          <View style={{ padding: 10 }}>
            <CustomText>Your Order</CustomText>
            <View style={{ padding: 15 }}>
              <CustomText variant="label">
                {cart.item} : {cart.price / 100}
              </CustomText>
            </View>
            <CustomText>Total : ${cart.price / 100}</CustomText>
          </View>
          <CardDetailsContainer>
            <NameInput
              label="Name"
              value={name}
              onChangeText={(value) => setName(value)}
            />
            <View style={{ paddingTop: 10 }}>
              {name.length > 0 && (
                <CreditCardInput
                  name={name}
                  onSuccess={(card) => setCard(card)}
                />
              )}
            </View>
          </CardDetailsContainer>
          <PayButton icon="cash" mode="contained" onPress={onPay}>
            Pay Now
          </PayButton>
          <ClearCartButton
            icon="cart-off"
            mode="contained"
            onPress={() => {
              setRestaurant({});
            }}
          >
            Clear Cart
          </ClearCartButton>
        </>
      )}
    </SafeAreaViewContainer>
  );
};

export default CheckoutScreen;
