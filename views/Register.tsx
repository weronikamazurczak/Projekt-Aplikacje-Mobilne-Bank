import React, { useState } from "react";
import {
  View,
  Pressable,
  Text,
  AlertCircleIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Button,
  ButtonText,
  FormControlErrorText,
  ScrollView,
} from "@gluestack-ui/themed";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Register({ navigation }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [czyNiePrawidloweImieNazwisko, ustawCzyNiePrawidloweImieNazwisko] =
    useState(false);
  const [czyNiePrawidloweEmail, ustawCzyNiePrawidloweEmail] = useState(false);
  const [czyNiePrawidloweHaslo, ustawCzyNiePrawidloweHaslo] = useState(false);
  const [
    czyNiePrawidlowoPowtorzoneHaslo,
    ustawCzyNiePrawidlowoPowtorzoneHaslo,
  ] = useState(false);

  return (
    <ScrollView style={styles.register}>
      <Pressable onPress={() => {navigation.navigate("Login")}} style={styles.arrow}>
        <AntDesign name="arrowleft" size={50} color="black" />
      </Pressable>

      <Text style={styles.titleRegister}>Stwórz konto</Text>
      <Text style={styles.bottomTitle}>
        Zarejestruj się za darmo i odkryj wszystkie możliwości.
      </Text>

      <View style={{ rowGap: 18 }}>
        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={czyNiePrawidloweImieNazwisko}
          isReadOnly={false}
          isRequired={true}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.label}>
              Imię i nazwisko
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.box}>
            <FontAwesome5 name="user" size={22} color="black" />
            <InputField
              type="text"
              placeholder="Imie i nazwisko"
              fontSize={12}
              onChangeText={(text) => {
                setName(text);
              }}
            />
          </Input>
          <FormControlError style={styles.label}>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              {" "}
              Wprowadzone błędne imię i nazwisko{" "}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

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
            <FormControlErrorText>
              {" "}
              Wprowadzone błędne adres email{" "}
            </FormControlErrorText>
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
            <FormControlErrorText>
              {" "}
              Wprowadzone błędne haslo lub nie zawiera 8 znaków
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={czyNiePrawidlowoPowtorzoneHaslo}
          isReadOnly={false}
          isRequired={true}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.label}>
              Potwierdź hasło
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.box}>
            <MaterialIcons name="lock-outline" size={24} color="black" />
            <InputField
              type="password"
              placeholder="Powtórz hasło"
              fontSize={12}
              onChangeText={(confirmPassword) => {
                setConfirmPassword(confirmPassword);
              }}
            />
          </Input>
          <FormControlError style={styles.label}>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              {" "}
              Wprowadzone hasła nie są takie same lub nie zawiera 8 znaków
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
      </View>

   

      <Button
        onPress={() => {
          if (!name || name.length < 3 || !/^[a-zA-Z]+ [a-zA-Z]+$/.test(name)) {
            ustawCzyNiePrawidloweImieNazwisko(true);
          }else{ustawCzyNiePrawidloweImieNazwisko(false);}
          if (!email.includes("@")) {
            ustawCzyNiePrawidloweEmail(true);
          }else{ustawCzyNiePrawidloweEmail(false);}
          if (password.length < 8) {
            ustawCzyNiePrawidloweHaslo(true);
          }else{ustawCzyNiePrawidloweHaslo(false);}
          if (confirmPassword.length < 8 || password !== confirmPassword) {
            ustawCzyNiePrawidlowoPowtorzoneHaslo(true);
          } else if(confirmPassword.length > 8 && password === confirmPassword) {
            ustawCzyNiePrawidlowoPowtorzoneHaslo(false);
          }
            if (
            name &&
            name.length > 3 &&
            /^[a-zA-Z]+ [a-zA-Z]+$/.test(name) &&
            email.includes("@") &&
            password.length > 8 &&
            confirmPassword.length > 8 &&
            password === confirmPassword
          ) {
            navigation.navigate("AddCard", {
              name: name,
              email: email,
              password: password,
              confirmPassword: confirmPassword,
            });
          }
        }}
        style={styles.registerNextButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Dalej</ButtonText>
      </Button>
    </ScrollView >
  );
}
