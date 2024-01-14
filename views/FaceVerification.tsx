import React, { useEffect, useState } from "react";
import { View, Text } from "@gluestack-ui/themed";
import { Button, ButtonText } from "@gluestack-ui/themed";
import * as LocalAuthentication from "expo-local-authentication";
import styles from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ZalogujUzytkownika } from "./Login";

export default function FaceVerification({ navigation }: any) {
  const [isCredentials,setIsCredentials] = useState(true)

  const readCredentials = async () => {
    try {
      const login = await AsyncStorage.getItem('login');
      const password = await AsyncStorage.getItem('password');
  
      if (login !== null && password !== null) {
        console.log('Login:', login);
        console.log('Hasło:', password);
        ZalogujUzytkownika(login,password,navigation)
      } else {
        console.log('Brak zapisanych danych.');
        setIsCredentials(false);
      }
    } catch (error) {
      console.error('Błąd podczas odczytywania danych:', error);
    }
  };
    useEffect(()=>{

    },[])
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
            readCredentials();
       
          } else {
            console.log('Autoryzacja nieudana');
          }
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
      {!isCredentials && 
         <Text style={{
          paddingTop: 10,
          fontWeight: "bold",
          fontSize: 24,
          marginLeft: 10,
          color: "#000",
        }}>nigdy nie bylo logowania z takiego telefonu</Text>
      }
            <Button
        onPress={checkBiometrics}
        style={styles.registerNextButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }} onPress={() => {navigation.goBack()}}>Zaloguj się</ButtonText>
      </Button>
    </View>
  );
}