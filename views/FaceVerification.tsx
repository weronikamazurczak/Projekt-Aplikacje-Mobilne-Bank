import React, { useEffect, useState } from "react";
import { View, Text } from "@gluestack-ui/themed";
import { Button, ButtonText } from "@gluestack-ui/themed";
import * as LocalAuthentication from "expo-local-authentication";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";

interface PrzekazanyKluczUzytkownika {
  kluczZalogowanegoUżytkownika: string;
}

export default function FaceVerification({ navigation }: any) {
  const route = useRoute();
  const { kluczZalogowanegoUżytkownika } =
    route.params as PrzekazanyKluczUzytkownika;

    const checkBiometrics = async () => {
      try {
       
        const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
        const supportedTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
   
        if (isBiometricAvailable && supportedTypes.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)) {
         
          const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autoryzacja przy użyciu faceID',
            cancelLabel: "Anuluj",
            fallbackLabel: "Użyj kodu PIN",
            disableDeviceFallback: false,
          });

          if (result.success) {
            console.log('Użytkownik zweryfikowany pomyślnie');
            navigation.navigate("Home", {
              kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika,
            });
       
          } else {
            console.log('Autoryzacja nieudana');
          }
        }
        else{
          navigation.navigate("Home", {
            kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <View  marginTop={70} style={styles.register}>
      <Text style={{
          paddingTop: 10,
          fontWeight: "bold",
          fontSize: 32,
          marginLeft: 10,
          marginTop:10,
          color: "#000",
        }}>Skanowanie Twarzy</Text>
      <Button
        onPress={checkBiometrics}
        style={styles.registerNextButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Skanuj Twarz</ButtonText>
      </Button>

            <Button
        style={styles.registerNextButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => {navigation.goBack()}}
      >
        <ButtonText style={{ color: "#000" }}>Cofnij</ButtonText>
      </Button>
    </View>
  );
}