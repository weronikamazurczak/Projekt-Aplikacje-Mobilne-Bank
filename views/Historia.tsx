import { View, Text, ScrollView, Pressable } from "@gluestack-ui/themed";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import React from "react";
import { LastTransaction } from "./LastTransaction";
import { useRoute } from "@react-navigation/native";
interface TransactionListI {
  name: string;
  amount: number;
  typePay: string;
}

interface PrzekazanaNazwa {
  screenName?: string;
  kluczZalogowanegoUżytkownika: string;
}

export default function Historia({ navigation }: any) {
  const route = useRoute();
  console.log(route.params);
  const { screenName, kluczZalogowanegoUżytkownika } =
    route.params as PrzekazanaNazwa;
  return (
    <ScrollView marginBottom={30} style={styles.ladowanie}>
      <Pressable
        onPress={() => {
          navigation.navigate(screenName);
        }}
        style={styles.arrow}
      >
        <AntDesign name="arrowleft" size={50} color="black" />
      </Pressable>

      <Text
        style={{
          paddingTop: 10,
          fontWeight: "bold",
          fontSize: 32,
          marginLeft: 10,
          color: "#000",
        }}
      >
        Ostatnie Transakcje
      </Text>
      <LastTransaction />
    </ScrollView>
  );
}
