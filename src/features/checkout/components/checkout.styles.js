import { Button, Avatar, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import styled from "styled-components/native";

export const PayButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  margin: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[4]};
  padding: ${(props) => props.theme.space[2]};
`;

export const ClearCartButton = styled(Button).attrs({
  color: colors.ui.error,
})`
  margin: 0 ${(props) => props.theme.space[4]};
  padding: ${(props) => props.theme.space[2]};
`;

export const CartIconContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.theme.colors.brand.primary};
  margin: ${(props) => props.theme.space[2]};
`;

export const CardDetailsContainer = styled.View`
  padding: 10px;
`;

export const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[1]} ${(props) => props.theme.space[3]};
`;
