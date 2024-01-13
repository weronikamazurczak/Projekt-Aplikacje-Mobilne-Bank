import { Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Button,
  ButtonText,
  Avatar,
  AvatarImage,
  ScrollView,
} from "@gluestack-ui/themed";
import ModernKeyboard from "react-native-modern-keyboard";
import { useRoute } from "@react-navigation/native";

interface PrzekazanaNazwa {
  screenName?: string;
  kluczZalogowanegoUżytkownika: string;
}


export default function Send3({ navigation }: any) {
  const [input, setInput] = useState<string>();
  const route = useRoute();
  const { kluczZalogowanegoUżytkownika } =
    route.params as PrzekazanaNazwa;
  const { screenName } = route.params as PrzekazanaNazwa;
  console.log(screenName);

  const [balanceFromDatabase, setBalanceFromDatabase] = useState("");

  const fetchBalance = async () => {
    try {
      const response = await fetch(
        "https://bank-app-3a23b-default-rtdb.europe-west1.firebasedatabase.app/uzytkownicy.json"
      );
      const data = await response.json();

      const user = data[kluczZalogowanegoUżytkownika];
      if (user.balance) {
        setBalanceFromDatabase(user.balance);
      }
    } catch (error) {
      console.error("Błąd podczas pobierania danych z bazy danych:", error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <View style={styles.send}>
      <Pressable
        onPress={() => {
          navigation.navigate("Send", { screenName: screenName , 
            kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika});
        }}
        style={styles.arrow}
      >
        <AntDesign name="arrowleft" size={50} color="black" />
      </Pressable>

      <Text style={styles.titleSend2}>Wyślij</Text>

      <Avatar size="lg" style={styles.profilAwatar2}>
        <AvatarImage source={require("../assets/awatar4.png")} alt="odbiorca" />
      </Avatar>

      <Text style={styles.nameSend2}>Bartłomiej</Text>
      <Text style={styles.mailSend2}>bartlomiej264@gmail.com</Text>

      <Button
        style={styles.send2Amount}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={styles.send2ButtonTextAmount}>
          {input} PLN
        </ButtonText>
      </Button>

      <Text style={styles.textSend2Amount}>Podaj kwote</Text>

      <Text style={styles.send2Availablefunds}>Dostępne środki: {balanceFromDatabase} PLN</Text>

      <Button
        onPress={() => {
          navigation.navigate("TransferCompleted", { screenName: screenName , 
            kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika});
        }}
        style={styles.send2NextButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Wyślij</ButtonText>
      </Button>

      <ModernKeyboard
        style={styles.keyboard}
        size={50}
        onInputChange={(value: string) => {
          setInput(value);
        }}
      />


    </View>
  );
}
