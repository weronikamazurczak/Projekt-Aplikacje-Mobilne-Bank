import { View, Text, ScrollView, Pressable } from "@gluestack-ui/themed";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import React from "react";
interface TransactionListI {
  name: string;
  amount: number;
  typePay: string;
}
export const LastTransaction = ({ navigation }: any) => {
  const TransactionElement = (
    arrayTransaction: TransactionListI[],
    dateTime: string
  ) => {
    return arrayTransaction.map((item, index) => (
      <View
        key={index}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 8,
          marginHorizontal: 15,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
        }}
      >
        <View style={{}}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
            {item.name}
          </Text>
          <Text style={{ color: "gray", fontSize: 14 }}>{item.typePay}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>
            {"-" + item.amount + " PLN"}
          </Text>
          <Text style={{ color: "gray", fontSize: 14 }}>{dateTime}</Text>
        </View>
      </View>
    ));
  };
  const transaction = [
    {
      dateTime: "Niedziela, 21.03.2023",
      transactionList: [
        { name: "netflix", amount: 20, typePay: "Trasakcja kartą płatniczą" },
        { name: "spotify", amount: 30, typePay: "Trasakcja kartą płatniczą" },
      ],
    },
    {
      dateTime: "Poniedziałek, 23.03.2023",
      transactionList: [
        { name: "youtube", amount: 120, typePay: "Trasakcja kartą płatniczą" },
        { name: "spotify", amount: 120, typePay: "Trasakcja kartą płatniczą" },
        { name: "spotify", amount: 120, typePay: "Trasakcja kartą płatniczą" },
      ],
    },
    {
      dateTime: "Wtorek, 26.03.2023",
      transactionList: [
        { name: "youtube", amount: 120, typePay: "Trasakcja kartą płatniczą" },
        { name: "spotify", amount: 120, typePay: "Trasakcja kartą płatniczą" },
        { name: "spotify", amount: 120, typePay: "Trasakcja kartą płatniczą" },
        { name: "spotify", amount: 150, typePay: "Trasakcja kartą płatniczą" },
      ],
    },
  ];

  return (
    <View marginBottom={30}>
      {transaction.map((item, index) => {
        return (
          <View key={index}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 20,
                backgroundColor: "#cccccc",
                padding: 5,
                textAlign: "center",
              }}
            >
              {item.dateTime}
            </Text>
            {TransactionElement(item.transactionList, item.dateTime)}
          </View>
        );
      })}
    </View>
  );
};

//Obiekt z bazy:
/*
transakcje:{
  kluczAktualnieZalogowanegoUzytkownika:{
    kluczTranskacji1:{
      kwotaTransakcji: "123"
      nazwaOdbiorcy: "sdfsdf"
      tutulPrzelewu: "asdf"
      (TE TRZY POLA SĄ Z EKRANU PRZELEW KRAJOWY GDZIE WPISUJE SIE ODBIORCE, KWOTE, TYUL )
    }
  }
}
*/
