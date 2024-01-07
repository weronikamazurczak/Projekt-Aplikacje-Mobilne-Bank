import React, { useEffect } from "react";
import { View, Text } from "@gluestack-ui/themed";
import { Button, ButtonText } from "@gluestack-ui/themed";
import * as LocalAuthentication from "expo-local-authentication";
import styles from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FaceVerification({ navigation }: any) {


  const readCredentials = async () => {
    try {
      const login = await AsyncStorage.getItem('login');
      const password = await AsyncStorage.getItem('password');
  
      if (login !== null && password !== null) {
        console.log('Login:', login);
        console.log('Hasło:', password);
      } else {
        console.log('Brak zapisanych danych.');
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

        if (isBiometricAvailable) {
         
          const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autoryzacja przy użyciu biometrii',
          });

          if (result.success) {
            console.log('Użytkownik zweryfikowany pomyślnie');
            readCredentials();
            // tutaj trzeba dac logike logowania z zapisanych danych w sesji navigation.navigate("Home");
       
          } else {
            console.log('Autoryzacja nieudana');
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <View style={styles.register}>
      <Text>FaceVerification</Text>
      <Button
        onPress={checkBiometrics}
        style={styles.registerNextButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Dalej</ButtonText>
      </Button>
    </View>
  );
}