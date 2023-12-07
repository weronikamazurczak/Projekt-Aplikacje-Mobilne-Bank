import { AlertCircleIcon, Button, ButtonText, CheckIcon, Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel, FormControl, FormControlError, FormControlErrorIcon, FormControlLabel, FormControlLabelText, Input, InputField, Pressable, Text, View } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';

export const AddCard = ({navigation}:any ) => {


  return (
    <View style={styles.register}>
      <Pressable onPress={() => { }} style={styles.arrow}>
        <AntDesign name="arrowleft" size={50} color="black" />
      </Pressable>
      <Text style={styles.titleAddCard}>
        Dodaj kartę
      </Text>
      <View style={{ rowGap: 18 }}>
        <FormControl size="sm" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true} >
          <FormControlLabel mb='$1'>
            <FormControlLabelText style={styles.label}>Numer Karty</FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.box} >
            <AntDesign name="creditcard" size={22} color="black" />
            <InputField
              type="text"
              placeholder="1234 1234 1234 1234"
              fontSize={12}
            />

          </Input>
          <FormControlError>
            <FormControlErrorIcon
              as={AlertCircleIcon}
            />
          </FormControlError>
        </FormControl>

        <FormControl size="sm" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true} >
          <FormControlLabel mb='$1'>
            <FormControlLabelText style={styles.label}>Data wygaśnięcia</FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.box} >
            <AntDesign name="calendar" size={22} color="black" />
            <InputField
              type="text"
              placeholder="MM/YY"
              fontSize={12}
            />

          </Input>
          <FormControlError>
            <FormControlErrorIcon
              as={AlertCircleIcon}
            />
          </FormControlError>
        </FormControl>

        <FormControl size="sm" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true} >
          <FormControlLabel mb='$1'>
            <FormControlLabelText style={styles.label}>CVC</FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.box} >
            <MaterialIcons name="lock-outline" size={22} color="black" />
            <InputField
              type="text"
              placeholder="123"
              fontSize={12}
            />

          </Input>
          <FormControlError>
            <FormControlErrorIcon
              as={AlertCircleIcon}
            />
          </FormControlError>
        </FormControl>

      </View>
      <Checkbox style={{
        marginLeft: '7%',
        marginTop: 50
      }} aria-label="poliytyka prywatnosci checkbox" size="md" isInvalid={false} isDisabled={false} value={""}>
        <CheckboxIndicator mr="$2">
          <CheckboxIcon style={styles.checkTitleStyle} as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel style={styles.checkTitleStyle}>Zgadzam się z polityką prywatności</CheckboxLabel>
      </Checkbox>

      <Button
      onPress={()=> navigation.navigate("FaceVerification")}
        style={styles.addCardNaxtButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}>
        <ButtonText style={{ color: '#000' }}>Dodaj kartę</ButtonText>
      </Button>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
        <Text style={{
          fontSize: 12,
          color: '#000',
          fontWeight: "bold",
        }}>Masz już konto?{' '}</Text>
        <Pressable>
          <Text style={{
            fontSize: 12,
            color: '#40ff00',
            fontWeight: "bold",
          }}>Zaloguj się</Text>
        </Pressable>
      </View>
    </View>);
}