import { ButtonText, View, Text, Button } from "@gluestack-ui/themed";
import React from "react";
import styles from "./styles";

export default function SuccessfulVerification({ navigation }: any) {
  return (
    <View>
      <Text>SuccessfulVerification</Text>
      <Button
        onPress={() => navigation.navigate("Home")}
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
