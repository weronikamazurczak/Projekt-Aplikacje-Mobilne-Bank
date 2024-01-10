import { Text, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
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
  VStack,
  View,
  Button,
  ArrowRightIcon,
  ButtonIcon,
} from "@gluestack-ui/themed";
import { useRoute } from "@react-navigation/native";

interface PrzekazanaNazwa {
  screenName?: string;
  kluczZalogowanegoUżytkownika: string;
}

export default function Transfer({ navigation }: any) {
  const route = useRoute();
  const { screenName, kluczZalogowanegoUżytkownika } =
    route.params as PrzekazanaNazwa;

  const [nazwaOdbiorcy, setNazwaOdbiorcy] = useState("");
  const [kwotaTransakcji, setKwotaTransakcji] = useState("");
  const [tutulPrzelewu, setTytulPrzelewu] = useState("");

  return (
    <ScrollView style={styles.transfer}>
      <Pressable
        onPress={() => {
          navigation.navigate(screenName);
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
              onChangeText={(nazwaOdbiorcy) => {
                setNazwaOdbiorcy(nazwaOdbiorcy);
              }}
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
            <InputField
              fontSize={14}
              type="text"
              placeholder="Wpisz kwotę"
              onChangeText={(kwotaTransakcji) => {
                setKwotaTransakcji(kwotaTransakcji);
              }}
            />
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
              onChangeText={(tutulPrzelewu) => {
                setTytulPrzelewu(tutulPrzelewu);
              }}
            />
          </Input>
        </FormControl>
      </View>

      <Button
        onPress={() => {
          WyslijPrzelewDoBazy(kluczZalogowanegoUżytkownika,{
            nazwaOdbiorcy: nazwaOdbiorcy,
            kwotaTransakcji: kwotaTransakcji,
            tutulPrzelewu: tutulPrzelewu,
          });
          navigation.navigate("TransferCompleted", {
            kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika,
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
        <ButtonIcon style={{ color: "#000" }} as={ArrowRightIcon} />
      </Button>
    </ScrollView>
  );
}

async function WyslijPrzelewDoBazy( kluczZalogowanegoUżytkownika:string, obiekt: object) {
  const firebaseLinkDoBazy =
    "https://bank-app-3a23b-default-rtdb.europe-west1.firebasedatabase.app/";
  const sciezkaDoBazy = "/transakcje";
  const kluczAktualnieZalogowanegoUzytkownika =
    "/" + kluczZalogowanegoUżytkownika + ".json";
    console.log(kluczZalogowanegoUżytkownika);
  const ApiKey = "AIzaSyClXS4Fq6KgC-Ij_3u9XJxSvwfEalkXj24";
  const LinkZadania = `${firebaseLinkDoBazy}${sciezkaDoBazy}${kluczAktualnieZalogowanegoUzytkownika}?key=${ApiKey}`;
  try {
    const response = await fetch(LinkZadania, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obiekt),
    });
    if (response.ok) {
      console.log("Dane transakcji przelwu wyslane do bazy");
    }
  } catch (error) {
    console.error(error);
  }
}
