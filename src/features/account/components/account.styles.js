import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { fonts, fontSizes } from "../../../infrastructure/theme/fonts";
import { Button, TextInput } from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AnimationWrapper = styled.View`
  position: absolute;
  bottom: 70%;
  padding: ${(props) => props.theme.space[4]};
`;

export const Title = styled.Text`
  font-family: ${fonts.body};
  font-size: ${fontSizes.h4};
`;

export const AccountCover = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[4]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  margin: ${(props) => props.theme.space[3]};
`;

export const AuthInput = styled(TextInput).attrs({})`
  width: 250px;
  margin: ${(props) => props.theme.space[3]};
`;

export const ErrorBox = styled.View`
  margin-left: ${(props) => props.theme.space[3]};
  width: 250px;
`;
