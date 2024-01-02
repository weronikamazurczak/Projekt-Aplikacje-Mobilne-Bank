import { Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { View, Image, Button, ButtonText } from "@gluestack-ui/themed";

export default function TransferCompleted({ navigation }: any) {
  return (
    <View style={styles.transfer}>
      <Pressable
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={styles.arrow}
      >
        <AntDesign name="arrowleft" size={50} color="black" />
      </Pressable>

      <Image
        style={styles.logoTransferCompleted}
        source={require("../assets/verify.png")}
        alt="logo image"
      />

      <Text style={styles.titleTransferCompleted}>Przelew zrealizowany</Text>

      <Button
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={styles.registerNextButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>OK</ButtonText>
      </Button>
    </View>
  );
}
