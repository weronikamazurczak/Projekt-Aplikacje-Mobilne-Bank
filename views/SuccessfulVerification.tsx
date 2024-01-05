import { ButtonText, View, Text, Button, Image } from "@gluestack-ui/themed";
import React from "react";
import styles from "./styles";

export default function SuccessfulVerification({ navigation }: any) {
  return (
    <View style={styles.verify}>
      <Image
        style={styles.verifyImg}
        source={require("../assets/verify.png")}
        alt="verify image"
      />
      <Text style={styles.accountCreate}>Konto utworzone</Text>
      <Text style={styles.additionInformation}>
        Gratulacje! Twoje konto zostało zweryfikowane pomyślnie. Teraz możesz
        korzystać z pełnej funkcjonalności
      </Text>
      <Button
        onPress={() => navigation.navigate("Login")}
        style={styles.registerNextButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Dalej</ButtonText>
      </Button>
    </View>
  );
}
