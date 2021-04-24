import React, { useState, useContext } from "react";
import {
  AccountBackground,
  Title,
  AccountCover,
  AccountContainer,
  AuthInput,
  AuthButton,
  ErrorBox,
} from "../components/account.styles";
import { Text as CustomText } from "../../../components/typography/text";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator, Colors } from "react-native-paper";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          textContentType="emailAddress"
          autoCapitalize="none"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <AuthInput
          label="Password"
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <AuthInput
          label="Repeat Password"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          value={repeatedPassword}
          onChangeText={(password) => setRepeatedPassword(password)}
        />
        {error && (
          <ErrorBox>
            <CustomText variant="error">{error}</CustomText>
          </ErrorBox>
        )}
        {!isLoading ? (
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </AccountContainer>
      <AuthButton
        icon="arrow-left"
        mode="contained"
        onPress={() => navigation.navigate("Main")}
      >
        Back
      </AuthButton>
    </AccountBackground>
  );
};

export default RegisterScreen;
