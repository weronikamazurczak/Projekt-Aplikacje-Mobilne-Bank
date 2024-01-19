import { View, Text, Pressable } from "react-native";
import {
  Avatar,
  AvatarImage,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Button,
} from "@gluestack-ui/themed";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

interface PrzekazanyKluczUzytkownika {
  kluczZalogowanegoUżytkownika: string;
}

export default function Profil({ navigation }: any) {
  const route = useRoute();
  const { kluczZalogowanegoUżytkownika } =
    route.params as PrzekazanyKluczUzytkownika;

  const [nameFromDatabase, setNameFromDatabase] = useState("");
  const [emailFromDatabase, setEmailFromDatabase] = useState("");
  const [cardNumberFromDatabase, setCardNumberFromDatabase] = useState("");
  const [balanceFromDatabase, setBalanceFromDatabase] = useState("");

  const fetchUserName = async () => {
    try {
      const response = await fetch(
        "https://bank-app-3a23b-default-rtdb.europe-west1.firebasedatabase.app/uzytkownicy.json"
      );
      const data = await response.json();

      if (data[kluczZalogowanegoUżytkownika].name) {
        setNameFromDatabase(data[kluczZalogowanegoUżytkownika].name);
      }
    } catch (error) {
      console.error("Błąd podczas pobierania danych z bazy danych:", error);
    }
  };

  const fetchUserEmail = async () => {
    try {
      const response = await fetch(
        "https://bank-app-3a23b-default-rtdb.europe-west1.firebasedatabase.app/uzytkownicy.json"
      );
      const data = await response.json();

      const user = data[kluczZalogowanegoUżytkownika];
      if (user.email) {
        setEmailFromDatabase(user.email);
      }
    } catch (error) {
      console.error("Błąd podczas pobierania danych z bazy danych:", error);
    }
  };

  const fetchCardNumber = async () => {
    try {
      const response = await fetch(
        "https://bank-app-3a23b-default-rtdb.europe-west1.firebasedatabase.app/uzytkownicy.json"
      );
      const data = await response.json();

      const user = data[kluczZalogowanegoUżytkownika];
      if (user.cardNumber) {
        setCardNumberFromDatabase(user.cardNumber);
      }
    } catch (error) {
      console.error("Błąd podczas pobierania danych z bazy danych:", error);
    }
  };

  const fetchBalance = async () => {
    try {
      const response = await fetch(
        "https://bank-app-3a23b-default-rtdb.europe-west1.firebasedatabase.app/uzytkownicy.json"
      );
      const data = await response.json();

      const user = data[kluczZalogowanegoUżytkownika];
      console.log(user);
      if (user.balance) {
        setBalanceFromDatabase(user.balance);
      }
    } catch (error) {
      console.error("Błąd podczas pobierania danych z bazy danych:", error);
    }
  };

  useEffect(() => {
    fetchUserName();
    fetchUserEmail();
    fetchCardNumber();
    fetchBalance();
  }, []);

  return (
    <View style={styles.profil}>
      <Pressable
        onPress={() => {
          navigation.navigate("Pulpit");
        }}
        style={styles.arrow}
      >
        <AntDesign name="arrowleft" size={50} color="black" />
      </Pressable>

      <Text style={styles.titleProfil}>Profil</Text>

      <AvatarComponent />

      <Text style={styles.nameProfil}>{nameFromDatabase}</Text>
      <Text style={styles.mailProfil}>{emailFromDatabase}</Text>

      <Button
        size="md"
        variant="link"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>
          AKTUALNE SALDO: {balanceFromDatabase} PLN
        </ButtonText>
      </Button>

      <View style={{ rowGap: 18 }}>
        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={true}
          isRequired={false}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.label}>
              Imię i Nazwisko
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.box}>
            <FontAwesome5 name="user" size={22} color="black" />
            <InputField type="text" placeholder={nameFromDatabase} />
          </Input>
        </FormControl>

        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={true}
          isRequired={false}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.label}>
              Email
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.box}>
            <Fontisto name="email" size={24} color="black" />
            <InputField type="text" placeholder={emailFromDatabase} />
          </Input>
        </FormControl>

        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={true}
          isRequired={false}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.label}>
              Karta
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.box}>
            <AntDesign name="creditcard" size={24} color="black" />
            <InputField type="text" placeholder={cardNumberFromDatabase} />
          </Input>
        </FormControl>
      </View>

      <Button
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={styles.registerNextButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Wyloguj</ButtonText>
      </Button>
    </View>
  );
}

const AvatarComponent = () => {
  return (
    <Avatar size="lg" style={styles.profilAwatar}>
      <AvatarImage
        source={{
          uri: "https://i.imgur.com/sdc68pF.png",
        }}
        alt="zdjecie"
      />
    </Avatar>
  );
};
