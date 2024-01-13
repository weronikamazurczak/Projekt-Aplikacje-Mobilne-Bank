import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import { ButtonText, View, Text, Button, Pressable,Image } from "@gluestack-ui/themed";
import styles from "./styles";

export default function FingerVerification({ navigation }: any) {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  useEffect(() => {
    (async () => {
      const isSupported = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(isSupported);
    })();
  }, []);

  const handleFingerVerification = async () => {
    if (!isBiometricSupported) {
      return;
    }
    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      navigation.navigate("SuccessfulVerification");
    }
  };

  return (
    <View style={styles.fingerVerification}>
      <Pressable
        onPress={() => {
          navigation.navigate("FaceVerification");
        }}
        style={styles.arrow}
      >
        <AntDesign name="arrowleft" size={50} color="black" />
      </Pressable>

      <Text style={styles.titleFingerVerification}>Odcisk palca</Text>
      <Text style={styles.bottomTitle}>
        Zeskanuj swój palec
      </Text>

      <Image
        style={styles.imageFinger}
        source={require("../assets/fingerVeryfication.png")}
        alt="logo image"
      />

      <Button
        onPress={() => {
          handleFingerVerification()
        }}
        style={styles.fingerVeryficationOption}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={!isBiometricSupported}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Włącz weryfikację odciskiem palca</ButtonText>
      </Button>

      <Button
        onPress={() => navigation.navigate("SuccessfulVerification")}
        style={styles.fingerSkip}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Pomiń na razie</ButtonText>
      </Button>
      
    </View>
  );
}