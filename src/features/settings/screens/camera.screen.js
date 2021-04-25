import React, { useRef, useEffect, useState, useContext } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { SafeAreaViewContainer } from "../../../components/utils/safe-area";
import { Text as CustomText } from "../../../components/typography/text";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    askCameraPermission();
  }, []);

  const askCameraPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`user-${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (hasPermission === false) {
    return (
      <SafeAreaViewContainer>
        <CustomText>No access to camera</CustomText>;
      </SafeAreaViewContainer>
    );
  }

  return (
    <TouchableOpacity onPress={() => snap()}>
      <ProfileCamera
        ref={(r) => (cameraRef.current = r)}
        type={Camera.Constants.Type.front}
        ratio={"16:9"}
      />
    </TouchableOpacity>
  );
};

export default CameraScreen;
