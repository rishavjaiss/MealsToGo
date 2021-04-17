import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";
import { Text as CustomText } from "../../../components/typography/text";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const isAndroid = Platform.OS === "android";

const MapCallout = ({ restaurant }) => {
  return (
    <Item>
      {isAndroid ? (
        <CompactWebView source={{ uri: restaurant.photos[0] }} />
      ) : (
        <CompactImage source={{ uri: restaurant.photos[0] }} />
      )}
      <CustomText center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </CustomText>
    </Item>
  );
};

export default MapCallout;
