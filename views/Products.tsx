import { View, Text, Pressable } from "@gluestack-ui/themed";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

interface PrzekazanyKluczUzytkownika {
  kluczZalogowanegoUżytkownika: string;
}

export default function Products({ navigation }: any) {
  const route = useRoute();
  const { kluczZalogowanegoUżytkownika } =
    route.params as PrzekazanyKluczUzytkownika;
  return (
    <View style={styles.ladowanie}>
      <Pressable
        onPress={() => {
          navigation.navigate("Pulpit");
        }}
        style={styles.arrowProduct}
      >
        <AntDesign name="arrowleft" size={40} color="black" />
      </Pressable>

      <Text
        style={{
          paddingTop: 10,
          fontWeight: "bold",
          fontSize: 24,
          marginLeft: 40,
          marginBottom: 120,
          color: "#000",
        }}
      >
        Produkty
      </Text>
      <View
        style={{
          marginLeft: 20,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("Send", { screenName: "Produkty",
            kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika });
          }}
          style={styles.iconProduct}
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
        <Pressable
          onPress={() => {
            navigation.navigate("Historia", { screenName: "Produkty" });
          }}
          style={styles.iconProduct}
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
        <Pressable
          onPress={() => {
            navigation.navigate("Transfer", {
              screenName: "Produkty",
              kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika,
            });
          }}
          style={styles.iconProduct}
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
          <Text padding={5} fontSize={20} color="black">
            Przelew Krajowy
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
