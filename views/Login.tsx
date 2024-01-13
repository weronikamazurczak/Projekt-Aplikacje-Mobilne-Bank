import {
  Pressable,
  View,
  Image,
  Button,
  ButtonText,
  Text,
  AlertCircleIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  FormControlErrorText,
} from "@gluestack-ui/themed";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from "expo-local-authentication";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [czyNiePrawidloweHaslo, ustawCzyNiePrawidloweHaslo] = useState(false);
  const [czyNiePrawidloweEmail, ustawCzyNiePrawidloweEmail] = useState(false);

  return (
    <View style={styles.login}>
      <Image
        style={styles.logo}
        source={require("../assets/Login.png")}
        alt="logo image"
      />

      <Text style={styles.titleRegister}>Zaczynamy!</Text>
      <Text style={styles.bottomTitle}>
        Wpisz swoje dane i rozpocznij bankową podróż!
      </Text>

      <FormControl
        size="sm"
        isDisabled={false}
        isInvalid={czyNiePrawidloweEmail}
        isReadOnly={false}
        isRequired={true}
      >
        <FormControlLabel mb="$1">
          <FormControlLabelText style={styles.label}>
            Email
          </FormControlLabelText>
        </FormControlLabel>
        <Input style={styles.box}>
          <Fontisto name="email" size={24} color="black" />
          <InputField
            type="text"
            placeholder="example@gmail.com"
            fontSize={12}
            onChangeText={(email) => {
              setEmail(email);
            }}
          />
        </Input>
        <FormControlError style={styles.label}>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>Wprowadzono błędny email</FormControlErrorText>
        </FormControlError>
      </FormControl>

      <FormControl
        size="sm"
        isDisabled={false}
        isInvalid={czyNiePrawidloweHaslo}
        isReadOnly={false}
        isRequired={true}
      >
        <FormControlLabel mb="$1">
          <FormControlLabelText style={styles.label}>
            Hasło
          </FormControlLabelText>
        </FormControlLabel>
        <Input style={styles.box}>
          <MaterialIcons name="lock-outline" size={24} color="black" />
          <InputField
            type="password"
            placeholder="Hasło"
            fontSize={12}
            onChangeText={(password) => {
              setPassword(password);
            }}
          />
        </Input>
        <FormControlError style={styles.label}>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>Wprowadzono błędne hasło</FormControlErrorText>
        </FormControlError>
      </FormControl>

      <Button
        onPress={() => {
          if (!email.includes("@")) {
            ustawCzyNiePrawidloweEmail(true);
          }
          if (password.length < 8) {
            ustawCzyNiePrawidloweHaslo(true);
          } else if (email.includes("@") && password.length > 8) {
            ZalogujUzytkownika(email, password, navigation);
          }


        }}
        style={styles.registerNextButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Zaloguj się</ButtonText>
      </Button>

      <View style={styles.rejest}>
        <Text
          style={{
            fontSize: 12,
            color: "#000",
            fontWeight: "bold",
          }}
        >
          Nie masz konta?{" "}
        </Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              fontSize: 12,
              color: "#40ff00",
              fontWeight: "bold",
            }}
          >
            Załóż je już teraz
          </Text>
        </Pressable>

      </View>
 
        <Button onPress={() => navigation.navigate("FaceVerification")}
                style={styles.registerNextButton}
                size="lg"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}>
      <ButtonText style={{ color: "#000" }}>
           skanuj twarz
          </ButtonText>
        </Button>
        
    </View>
  );
}

export async function ZalogujUzytkownika(
  email: string,
  password: string,
  navigation: any
) {
  const saveCredentials = (login: string, password: string) => {
 
    AsyncStorage.setItem('login', login);
    AsyncStorage.setItem('password', password);
   console.log('Dane zapisane pomyślnie!');

};
  const firebaseLinkDoBazy =
    "https://bank-app-3a23b-default-rtdb.europe-west1.firebasedatabase.app/";
  const sciezkaDoBazy = "/uzytkownicy.json";
  const ApiKey = "AIzaSyClXS4Fq6KgC-Ij_3u9XJxSvwfEalkXj24";
  const LinkZadania = `${firebaseLinkDoBazy}${sciezkaDoBazy}?key=${ApiKey}`;
  try {
    const response = await fetch(LinkZadania);
    const data = await response.json();
    for (const aktualniePobranaDana in data) {
      const aktualniePobranyUzytkownik = data[aktualniePobranaDana];
      if (
        aktualniePobranyUzytkownik.email == email &&
        aktualniePobranyUzytkownik.password == password
      )
      {
        saveCredentials(email,password);
        if(aktualniePobranyUzytkownik.biometricAuthFinger){
          // Jeśli biometricAuthFinger jest true, poproś o weryfikację palcem
          const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autoryzacja przy użyciu TouchID',
          });
          if (result.success) {
            // Jeśli weryfikacja palcem powiodła się, przekieruj dalej
            navigation.navigate("Home", {
              kluczZalogowanegoUżytkownika: aktualniePobranaDana,
            });
          }
        }else {
          // Jeśli biometricAuthFinger jest false, przekieruj dalej
          navigation.navigate("Home", {
            kluczZalogowanegoUżytkownika: aktualniePobranaDana,
          });
        }
      }
      
    }
  } catch (error) {
    console.error(error);
  }
}
