import { ButtonText, View, Text, Button, Image } from "@gluestack-ui/themed";
import React from "react";
import styles from "./styles";

import { useRoute } from "@react-navigation/native";

interface DaneRejestracja {
  name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  confirmPassword?: string | undefined;
  cardNumber?: string | undefined;
  cardDate?: string | undefined;
  cvv?: string | undefined;
  balance?: string | undefined;
}


export default function SuccessfullFaceVeryfication({ navigation }: any) {
    const route = useRoute();
    const { name } = route.params as DaneRejestracja;
    const { email } = route.params as DaneRejestracja;
    const { password } = route.params as DaneRejestracja;
    const { confirmPassword } = route.params as DaneRejestracja;
    const { cardNumber } = route.params as DaneRejestracja;
    const { cardDate } = route.params as DaneRejestracja;
    const { cvv } = route.params as DaneRejestracja;
    const { balance } = route.params as DaneRejestracja;

  return (
    <View style={styles.verify}>
      <Image
        style={styles.verifyImg}
        source={require("../assets/verify.png")}
        alt="verify image"
      />
      <Text style={styles.accountCreate}>Weryfikacja Twarzy</Text>
      <Text style={styles.additionInformation}>
        Gratulacje! Twoje Twarz została zweryfikowane pomyślnie. Teraz możesz
       przejść to weryfikacji twojego palca.
      </Text>
      <Button
            onPress={() => {
            navigation.navigate("FingerVerification", {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                cardNumber: cardNumber,
                cardDate: cardDate,
                cvv: cvv,
                balance: balance,
                isFaceID:false
              });
        }}
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
