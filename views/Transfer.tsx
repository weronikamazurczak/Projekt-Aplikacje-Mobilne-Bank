import { Text, Pressable, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import {
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Input,
  InputField,
  Textarea,
  TextareaInput,
  VStack,
  View,
  Button,
  ArrowRightIcon,
  ButtonIcon,
} from "@gluestack-ui/themed";

export default function Transfer({ navigation }: any) {
  return (
    <ScrollView style={styles.transfer}>
      <Pressable
        onPress={() => {
          navigation.navigate("Products");
        }}
        style={styles.arrow}
      >
        <AntDesign name="arrowleft" size={50} color="black" />
      </Pressable>

      <Text style={styles.titleTransfer}>Przelew krajowy</Text>

      <View style={{ rowGap: 18 }}>
        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={false}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.labelTransfer}>
              Z rachunku
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.boxTransfer}>
            {/* <InputField 
                type="text"
                defaultValue='Konto VISA'
              /> */}
            <VStack>
              <Heading size="sm">Konto VISA</Heading>
              <Text>*1234 | $50,000</Text>
            </VStack>
          </Input>
        </FormControl>

        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={true}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.labelTransfer}>
              Do odbiorcy
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.boxTransfer}>
            <InputField
              fontSize={14}
              type="text"
              placeholder="Wyszukaj odbiorce po imieniu lub email"
            />
          </Input>
        </FormControl>

        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={true}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.labelTransfer}>
              Kwota
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.boxTransfer}>
            <InputField fontSize={14} type="text" placeholder="Wpisz kwotę" />
          </Input>
          <Text style={styles.textTransfer}>PLN</Text>
        </FormControl>
      </View>

      <View marginTop={40}>
        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={true}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.labelTransfer}>
              Tytuł
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.boxTransfer}>
            <InputField
              fontSize={14}
              type="text"
              placeholder="Przelew środków"
            />
          </Input>
        </FormControl>
      </View>

      <Button
        onPress={() => {
          navigation.navigate("TransferCompleted");
        }}
        style={styles.registerNextButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Dalej</ButtonText>
        <ButtonIcon style={{ color: "#000" }} as={ArrowRightIcon} />
      </Button>
    </ScrollView>
  );
}
