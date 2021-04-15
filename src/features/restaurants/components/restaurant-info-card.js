import React from "react";
import { Image, View as SectionOne } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text as CustomText } from "../../../components/typography/text";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionTwo,
  Rating,
} from "./restaurant-info-card.styles";

export default function RestaurantsInfoCard({
  name = "Restaurant Name",
  address = "Restaurant Address",
  icon = "https://maps.gstatic.com/mapfiles/place_api/icons/wine-71.png",
  rating = 4,
  isOpen = true,
  isClosedTemporarily = true,
}) {
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: "https://picsum.photos/1000" }} />
      <Info>
        <CustomText variant="label">{name}</CustomText>
        <Section>
          <SectionOne>
            <Rating>
              {ratingArray.map((index) => (
                <SvgXml key={index} xml={star} width={20} height={20} />
              ))}
            </Rating>
          </SectionOne>
          <SectionTwo>
            {isClosedTemporarily && (
              <CustomText variant="error">CLOSED TEMPORARILY</CustomText>
            )}
            {isOpen && (
              <SvgXml
                style={{ marginLeft: 10, marginRight: 10 }}
                xml={open}
                width={20}
                height={20}
              />
            )}
            <Image
              style={{ width: 20, height: 20 }}
              source={{
                uri: icon,
              }}
            />
          </SectionTwo>
        </Section>
        <CustomText variant="hint">{address}</CustomText>
      </Info>
    </RestaurantCard>
  );
}
