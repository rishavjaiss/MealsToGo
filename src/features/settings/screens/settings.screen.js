import React, { useContext } from "react";
import { SafeAreaViewContainer } from "../../../components/utils/safe-area";
import { Text as CustomText } from "../../../components/typography/text";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
padding-top:${(props) => props.theme.space[4]}
  align-items: center;
`;

const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeAreaViewContainer>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <CustomText style={{ marginTop: 20 }} variant="label">
          {user.email}
        </CustomText>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favouries"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeAreaViewContainer>
  );
};

export default SettingsScreen;
