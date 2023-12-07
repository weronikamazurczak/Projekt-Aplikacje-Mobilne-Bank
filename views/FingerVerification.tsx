import React from "react";
import { ButtonText, View, Text, Button } from "@gluestack-ui/themed";
import styles from "./styles";

export default function FingerVerification({ navigation }: any) {
  return (
    <View>
      <Text>FingerVerification</Text>
      <Button
        onPress={() => navigation.navigate("SuccessfulVerification")}
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
