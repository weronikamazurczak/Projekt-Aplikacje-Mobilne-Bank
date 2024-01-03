import { Text, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Button,
  ButtonText,
  Avatar,
  AvatarImage,
} from "@gluestack-ui/themed";
import ModernKeyboard from "react-native-modern-keyboard";
import { useRoute } from "@react-navigation/native";

interface PrzekazanaNazwa {
  screenName?: string;
}

export default function Send2({ navigation }: any) {
  const [input, setInput] = useState<string>();
  const route = useRoute();
  const { screenName } = route.params as PrzekazanaNazwa;
  console.log(screenName);
  return (
    <View style={styles.send}>
      <Pressable
        onPress={() => {
          navigation.navigate("Send", { screenName: screenName });
        }}
        style={styles.arrow}
      >
        <AntDesign name="arrowleft" size={50} color="black" />
      </Pressable>

      <Text style={styles.titleSend2}>Wyślij</Text>

      <Avatar size="lg" style={styles.profilAwatar2}>
        <AvatarImage source={require("../assets/awatar2.png")} alt="odbiorca" />
      </Avatar>

      <Text style={styles.nameSend2}>Michał</Text>
      <Text style={styles.mailSend2}>michal4673@gmail.com</Text>

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

      <Text style={styles.send2Availablefunds}>Dostępne środki: 300 PLN</Text>

      <Button
        onPress={() => {
          navigation.navigate("TransferCompleted");
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
        size={55}
        onInputChange={(value: string) => {
          setInput(value);
        }}
      />
    </View>
  );
}
