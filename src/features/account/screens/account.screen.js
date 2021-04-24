import React from "react";
import {
  AccountBackground,
  AnimationWrapper,
  Title,
  AccountCover,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";
import { Image } from "react-native";

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../../../../assets/foodtoss.gif")}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
