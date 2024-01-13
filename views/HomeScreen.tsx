import {
  View,
  Text,
  Pressable,
  VStack,
  HStack,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Heading,
  ScrollView,
} from "@gluestack-ui/themed";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import CreditCardUI from "rn-credit-card-ui/src/components/CreditCardUI";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LastTransaction } from "./LastTransaction";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

interface PrzekazanyKluczUzytkownika {
  kluczZalogowanegoUżytkownika: string;
}

export default function HomeScreen({ navigation }: any) {
  const route = useRoute();
  const { kluczZalogowanegoUżytkownika } =
    route.params as PrzekazanyKluczUzytkownika;

  const [nameFromDatabase, setNameFromDatabase] = useState("");
  const [cardNumberFromDatabase, setCardNumberFromDatabase] = useState("");
  const [numberCVC, setNumberCVC] = useState("");
  const [cardDateFromDatebase, setCardDateFromDatebase] = useState("");

  const fetchUserName = async () => {
    try {
      const response = await fetch(
        "https://bank-app-3a23b-default-rtdb.europe-west1.firebasedatabase.app/uzytkownicy.json"
      );
      const data = await response.json();
      setNameFromDatabase(data[kluczZalogowanegoUżytkownika].name);
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

  const fetchCVCNumber = async () => {
    try {
      const response = await fetch(
        "https://bank-app-3a23b-default-rtdb.europe-west1.firebasedatabase.app/uzytkownicy.json"
      );
      const data = await response.json();

      const user = data[kluczZalogowanegoUżytkownika];
      if (user.cvv) {
        setNumberCVC(user.cvv);
      }
    } catch (error) {
      console.error("Błąd podczas pobierania danych z bazy danych:", error);
    }
  };

  const fetchCardDate = async () => {
    try {
      const response = await fetch(
        "https://bank-app-3a23b-default-rtdb.europe-west1.firebasedatabase.app/uzytkownicy.json"
      );
      const data = await response.json();

      const user = data[kluczZalogowanegoUżytkownika];
      if (user.cardDate) {
        setCardDateFromDatebase(user.cardDate);
      }
    } catch (error) {
      console.error("Błąd podczas pobierania danych z bazy danych:", error);
    }
  };

  useEffect(() => {
    fetchUserName();
    fetchCardNumber();
    fetchCVCNumber();
    fetchCardDate();
  }, []);

  return (
    <ScrollView style={styles.main}>
      <VStack space="2xl" style={styles.awatar}>
        <Pressable
          onPress={() =>
            navigation.navigate("Notification", {
              kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika,
            })
          }
          style={styles.bell}
        >
          <FontAwesome5 name="bell" size={50} color="#254C48" />
        </Pressable>
        <HStack space="md">
          <Avatar>
            <AvatarFallbackText>A</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: "https://i.imgur.com/sdc68pF.png",
              }}
              alt="zdjecie"
            />
          </Avatar>
          <VStack>
            <Heading size="sm">Dzień dobry</Heading>
            <Text size="sm">{nameFromDatabase}</Text>
          </VStack>
        </HStack>
      </VStack>

      <View style={styles.card}>
        <CreditCardUI
          cardNumber={cardNumberFromDatabase}
          cardNumberStyle={{ marginBottom: 20 }}
          cvc={numberCVC}
          holderGender=""
          holderName={nameFromDatabase}
          holderNameStyle={{ marginBottom: 20 }}
          expiryDate={cardDateFromDatebase}
          bankName={"Bank of Sky"}
          bankLogo={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Earth_Eastern_Hemisphere.jpg/1024px-Earth_Eastern_Hemisphere.jpg",
          }}
          bankLogoStyle={{
            borderRadius: 100,
          }}
          isCardNumberShown={false}
          isHorizontalFlipEnabled={true}
          isVerticalFlipEnabled={false}
          dateLabel="VALID"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate("Send", { screenName: "Pulpit" , 
              kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika});
            }}
            style={styles.iconProductHome}
          >
            <MaterialCommunityIcons
              name="bank-transfer-out"
              size={40}
              color="black"
              style={{
                backgroundColor: "#5AE4A8",
                padding: 10,
                borderRadius: 10,
              }}
            />
            <Text padding={5} paddingVertical={20} fontSize={20} color="black">
              Wyślij
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate("Historia", { screenName: "Pulpit" });
            }}
            style={styles.iconProductHome}
          >
            <MaterialCommunityIcons
              name="bank-transfer-in"
              size={40}
              color="black"
              style={{
                backgroundColor: "#5AE4A8",
                padding: 10,
                borderRadius: 10,
              }}
            />
            <Text padding={5} paddingVertical={20} fontSize={20} color="black">
              Historia
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate("Transfer", {
                screenName: "Pulpit",
                kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika,
              });
            }}
            style={styles.iconProductHome}
          >
            <MaterialCommunityIcons
              name="bank-transfer"
              size={40}
              color="black"
              style={{
                backgroundColor: "#5AE4A8",
                padding: 10,
                borderRadius: 10,
              }}
            />

            <Text padding={5} fontSize={20} color="black">
              Przelew Krajowy
            </Text>
          </Pressable>
        </View>
      </View>

      <Text
        style={{
          paddingTop: 10,
          fontWeight: "bold",
          fontSize: 22,
          marginLeft: 10,
          color: "#000",
        }}
      >
        Ostatnie Transakcje
      </Text>
      <LastTransaction navigation={navigation} />
    </ScrollView>
  );
}
