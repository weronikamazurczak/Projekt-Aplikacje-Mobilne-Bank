import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import { ButtonText, View, Text, Button, Pressable,Image, ScrollView } from "@gluestack-ui/themed";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";

interface DaneRejestracja {
  name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  confirmPassword?: string | undefined;
  cardNumber?: string | undefined;
  cardDate?: string | undefined;
  cvv?: string | undefined;
  balance?: string | undefined;
}

export default function FaceVeryficationAdd({ navigation }: any) {
    const [isFaceIDAllow,setIsFaceIDAllow]= useState(true)

  const route = useRoute();
  const { name } = route.params as DaneRejestracja;
  const { email } = route.params as DaneRejestracja;
  const { password } = route.params as DaneRejestracja;
  const { confirmPassword } = route.params as DaneRejestracja;
  const { cardNumber } = route.params as DaneRejestracja;
  const { cardDate } = route.params as DaneRejestracja;
  const { cvv } = route.params as DaneRejestracja;
  const { balance } = route.params as DaneRejestracja;



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
          navigation.navigate("SuccessfullFaceVeryfication", {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            cardNumber: cardNumber,
            cardDate: cardDate,
            cvv: cvv,
            balance: balance,
            isFaceID:true
          });
     
        } else {
          console.log('Autoryzacja nieudana');
          setIsFaceIDAllow(false);
        }
      }
      else{
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.fingerVerification}>
      <Pressable
        onPress={() => {
          navigation.navigate("AddCard", {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          });
        }}
        style={styles.arrow}
      >
        <AntDesign name="arrowleft" size={50} color="black" />
      </Pressable>

      <Text style={styles.titleFingerVerification}>Skan twarzy</Text>
      <Text style={styles.bottomTitle}>
        Zeskanuj swoją twarz
      </Text>

      <Image
        style={styles.imageFinger}
        source={require("../assets/faceID.png")}
        alt="logo image"
      />

      <Button
        onPress={checkBiometrics}
        style={styles.fingerVeryficationOption}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={!isFaceIDAllow}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Włącz weryfikację skanem twarzy</ButtonText>
      </Button>

      <Button
        onPress={() => {
            navigation.navigate("FingerVerification", {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                cardNumber: cardNumber,
                cardDate: cardDate,
                cvv: cvv,
                balance: balance,
                isFaceID:false
              });
        }}
        style={styles.fingerSkip}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Pomiń na razie</ButtonText>
      </Button>
      
    </ScrollView>
  );
}

