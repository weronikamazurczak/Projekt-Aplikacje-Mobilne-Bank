import {
  AlertCircleIcon,
  Button,
  ButtonText,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Pressable,
  Text,
  View,
} from "@gluestack-ui/themed";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

interface DaneRejestracja {
  name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  confirmPassword?: string | undefined;
}


async function WyslijDoBazy(params:any) {
  const firebaseLinkDoBazy = 'https://bank-app-3a23b-default-rtdb.europe-west1.firebasedatabase.app/';
  const sciezkaDoBazy = '/uzytkownicy.json';
  const ApiKey = 'AIzaSyClXS4Fq6KgC-Ij_3u9XJxSvwfEalkXj24';
  const LinkZadania = `${firebaseLinkDoBazy}${sciezkaDoBazy}?key=${ApiKey}`;
  try{
    const response = await fetch(LinkZadania, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    if(response.ok) {
      console.log('rejestracja ok');
  }
} catch (error) {
  console.log(error);
}
}


export const AddCard = ({ navigation }: any) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cvv, setCvv] = useState("");

  const route = useRoute();
  const {name} = route.params as DaneRejestracja;
  const {email} =route.params as DaneRejestracja;
  const {password} = route.params as DaneRejestracja;
  const {confirmPassword} = route.params as DaneRejestracja;

  return (
    <View style={styles.register}>
      <Pressable onPress={() => {}} style={styles.arrow}>
        <AntDesign name="arrowleft" size={50} color="black" />
      </Pressable>
      <Text style={styles.titleAddCard}>Dodaj kartę</Text>
      <View style={{ rowGap: 18 }}>
        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={true}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.label}>
              Numer Karty
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.box}>
            <AntDesign name="creditcard" size={22} color="black" />
            <InputField
              type="text"
              placeholder="1234 1234 1234 1234"
              fontSize={12}
              onChangeText = {(cardNumber) => {setCardNumber(cardNumber)}}
            />
          </Input>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
          </FormControlError>
        </FormControl>

        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={true}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.label}>
              Data wygaśnięcia
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.box}>
            <AntDesign name="calendar" size={22} color="black" />
            <InputField 
            type="text" 
            placeholder="MM/YY" 
            fontSize={12}
            onChangeText = {(cardDate) => {setCardDate(cardDate)}}
             />
          </Input>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
          </FormControlError>
        </FormControl>

        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={true}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText style={styles.label}>
              CVC
            </FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.box}>
            <MaterialIcons name="lock-outline" size={22} color="black" />
            <InputField 
            type="text" 
            placeholder="123" 
            fontSize={12}
            onChangeText={(cvv) => {setCvv(cvv)}}
             />
          </Input>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
          </FormControlError>
        </FormControl>
      </View>
      <Checkbox
        style={{
          marginLeft: "7%",
          marginTop: 50,
        }}
        aria-label="poliytyka prywatnosci checkbox"
        size="md"
        isInvalid={false}
        isDisabled={false}
        value={""}
      >
        <CheckboxIndicator mr="$2">
          <CheckboxIcon style={styles.checkTitleStyle} as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel style={styles.checkTitleStyle}>
          Zgadzam się z polityką prywatności
        </CheckboxLabel>
      </Checkbox>


      <Button
        onPress={() => { WyslijDoBazy( {name: name, email:email, password:password, confirmPassword:confirmPassword, cardNumber:cardNumber, cardDate:cardDate, cvv:cvv} ); navigation.navigate("FaceVerification")}}
        style={styles.addCardNaxtButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Zarejestruj się</ButtonText>
      </Button>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
      </View>
    </View>
  );
};
