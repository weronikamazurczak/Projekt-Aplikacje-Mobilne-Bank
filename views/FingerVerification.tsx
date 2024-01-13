import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import { ButtonText, View, Text, Button, Pressable,Image } from "@gluestack-ui/themed";
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

export default function FingerVerification({ navigation }: any) {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [biometricAuth, setBiometricAuth] = useState(false); // Dodaj nowy stan

  const route = useRoute();
  const { name } = route.params as DaneRejestracja;
  const { email } = route.params as DaneRejestracja;
  const { password } = route.params as DaneRejestracja;
  const { confirmPassword } = route.params as DaneRejestracja;
  const { cardNumber } = route.params as DaneRejestracja;
  const { cardDate } = route.params as DaneRejestracja;
  const { cvv } = route.params as DaneRejestracja;
  const { balance } = route.params as DaneRejestracja;

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
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Autoryzacja przy użyciu TouchID',
    });
    setBiometricAuth(result.success); // Zaktualizuj stan biometricAuth
    if (result.success) {
      WyslijDoBazy({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        cardNumber: cardNumber,
        cardDate: cardDate,
        cvv: cvv,
        balance: balance,
        biometricAuthFinger: result.success, // Przekazujesz wartość result.success
      });
      navigation.navigate("SuccessfulVerification");
    }

  };

  return (
    <View style={styles.fingerVerification}>
      <Pressable
        onPress={() => {
          navigation.navigate("AddCard");
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
        onPress={() => {
          WyslijDoBazy({
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            cardNumber: cardNumber,
            cardDate: cardDate,
            cvv: cvv,
            balance: balance,
            biometricAuthFinger: false, // Przekazujesz wartość result.success
          });
          navigation.navigate("SuccessfulVerification");
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
      
    </View>
  );
}

async function WyslijDoBazy(params: any) {
  const firebaseLinkDoBazy =
    "https://bank-app-3a23b-default-rtdb.europe-west1.firebasedatabase.app/";
  const sciezkaDoBazy = "/uzytkownicy.json";
  const ApiKey = "AIzaSyClXS4Fq6KgC-Ij_3u9XJxSvwfEalkXj24";
  const LinkZadania = `${firebaseLinkDoBazy}${sciezkaDoBazy}?key=${ApiKey}`;
  try {
    const response = await fetch(LinkZadania, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    if (response.ok) {
      console.log("rejestracja ok");
    }
  } catch (error) {
    console.log(error);
  }
}