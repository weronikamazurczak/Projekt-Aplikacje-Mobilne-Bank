import { View, Text, ScrollView, Pressable } from "@gluestack-ui/themed";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import React from "react";
import { LastTransaction } from "./LastTransaction";
interface TransactionListI {
  name: string;
  amount: number;
  typePay: string;
}
export const Historia = ({ navigation }: any) => {
  return (
    <ScrollView marginBottom={30}>
      <Pressable
        onPress={() => {
          navigation.navigate("Products");
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
};
