import {
  AlertCircleIcon,
  Button,
  ButtonText,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Pressable,
  Text,
  View,
} from "@gluestack-ui/themed";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

interface DaneRejestracja {
  name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  confirmPassword?: string | undefined;
}

export const AddCard = ({ navigation }: any) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [czyNiePrawidlowyNumerKarty, ustawCzyNiePrawidlowyNumerKarty] =
    useState(false);
  const [
    czyNiePrawidlowaDataWygasniecia,
    ustawCzyNiePrawidlowaDataWygasniecia,
  ] = useState(false);
  const [czyNiePrawidlowyNumerCVC, ustawCzyNiePrawidlowyNumerCVC] =
    useState(false);
  const [czyZwalidowaneDane, ustawCzyZwalidowaneDane] = useState(false);

  const route = useRoute();
  const { name } = route.params as DaneRejestracja;
  const { email } = route.params as DaneRejestracja;
  const { password } = route.params as DaneRejestracja;
  const { confirmPassword } = route.params as DaneRejestracja;

  return (
    <View style={styles.register}>
      <Pressable
        onPress={() => {
          navigation.navigate("Register");
        }}
        style={styles.arrow}
      >
        <AntDesign name="arrowleft" size={50} color="black" />
      </Pressable>
      <Text style={styles.titleAddCard}>Dodaj kartę</Text>
      <View style={{ rowGap: 18 }}>
        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={czyNiePrawidlowyNumerKarty}
          isReadOnly={false}
          isRequired={true}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.label}>
              Numer Karty
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.box}>
            <AntDesign name="creditcard" size={22} color="black" />
            <InputField
              type="text"
              placeholder="1234 1234 1234 1234"
              fontSize={12}
              onChangeText={(cardNumber) => {
                setCardNumber(cardNumber);
              }}
            />
          </Input>
          <FormControlError style={styles.label}>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              {" "}
              Wprowadzono będny numer karty{" "}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={czyNiePrawidlowaDataWygasniecia}
          isReadOnly={false}
          isRequired={true}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.label}>
              Data wygaśnięcia
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.box}>
            <AntDesign name="calendar" size={22} color="black" />
            <InputField
              type="text"
              placeholder="MM/YY"
              fontSize={12}
              onChangeText={(cardDate) => {
                setCardDate(cardDate);
              }}
            />
          </Input>
          <FormControlError style={styles.label}>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              {" "}
              Wprowadzone błędną date{" "}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={czyNiePrawidlowyNumerCVC}
          isReadOnly={false}
          isRequired={true}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.label}>
              CVC
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.box}>
            <MaterialIcons name="lock-outline" size={22} color="black" />
            <InputField
              type="text"
              placeholder="123"
              fontSize={12}
              onChangeText={(cvv) => {
                setCvv(cvv);
              }}
            />
          </Input>
          <FormControlError style={styles.label}>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              {" "}
              Wprowadzony numer kodu CVC{" "}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
      </View>
      <Checkbox
        style={{
          marginLeft: "7%",
          marginTop: 50,
        }}
        aria-label="poliytyka prywatnosci checkbox"
        size="md"
        isInvalid={false}
        isDisabled={false}
        value={""}
      >
        <CheckboxIndicator mr="$2">
          <CheckboxIcon style={styles.checkTitleStyle} as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel style={styles.checkTitleStyle}>
          Zgadzam się z polityką prywatności
        </CheckboxLabel>
      </Checkbox>

      <Button
        onPress={() => {
          ustawCzyZwalidowaneDane(false);
          if (!czyZwalidowaneDane) {
            if (cardNumber.replace(/\s/g, "").length !== 16) {
              ustawCzyNiePrawidlowyNumerKarty(true);
            } else {
              ustawCzyNiePrawidlowyNumerKarty(false);
            }
            if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(cardDate)) {
              ustawCzyNiePrawidlowaDataWygasniecia(true);
            } else {
              ustawCzyNiePrawidlowaDataWygasniecia(false);
            }
            if (cvv.length !== 3) {
              ustawCzyNiePrawidlowyNumerCVC(true);
            } else {
              ustawCzyNiePrawidlowyNumerCVC(false);
            }
            ustawCzyZwalidowaneDane(true);
          }

          if (
            !czyNiePrawidlowyNumerKarty &&
            !czyNiePrawidlowaDataWygasniecia &&
            !czyNiePrawidlowyNumerCVC &&
            czyZwalidowaneDane
          ) {
            console.log(
              !czyNiePrawidlowyNumerKarty,
              !czyNiePrawidlowaDataWygasniecia,
              !czyNiePrawidlowyNumerCVC
            );
            WyslijDoBazy({
              name: name,
              email: email,
              password: password,
              confirmPassword: confirmPassword,
              cardNumber: cardNumber,
              cardDate: cardDate,
              cvv: cvv,
            });
            navigation.navigate("FaceVerification");
          }
        }}
        style={styles.addCardNaxtButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Zarejestruj się</ButtonText>
      </Button>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      ></View>
    </View>
  );
};

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
