import React, { useContext, useState } from "react";
import { SafeAreaViewContainer } from "../../../components/utils/safe-area";
import { Text as CustomText } from "../../../components/typography/text";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
padding-top:${(props) => props.theme.space[4]}
  align-items: center;
`;

const SettingsScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState();
  const { onLogout, user } = useContext(AuthenticationContext);

  const getProfilePicture = async (user) => {
    const photoUri = await AsyncStorage.getItem(`user-${user.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  });

  return (
    <SafeAreaViewContainer>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {photo ? (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          ) : (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
        </TouchableOpacity>
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
