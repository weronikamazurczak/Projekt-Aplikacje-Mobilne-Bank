import React from 'react'
import { View, Pressable, Text, AlertCircleIcon, FormControl, FormControlError, FormControlErrorIcon,  FormControlLabel, FormControlLabelText, Input, InputField, Button, ButtonText } from '@gluestack-ui/themed';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Register({navigation}:any ) {
    return (
        <View style = {styles.register}>
            <Pressable onPress={() =>{}} style = {styles.arrow}>
                <AntDesign name="arrowleft" size={50} color="black" />
            </Pressable>

            <Text style = {styles.titleRegister}>
                Stwórz konto
            </Text>
            <Text style = {styles.bottomTitle}>
                Zarejestruj się za darmo i odkryj wszystkie możliwości.
            </Text>

            
        <View style ={{rowGap: 18}}>
          <FormControl size="sm" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true} >
            <FormControlLabel mb='$1'>
              <FormControlLabelText style = {styles.label}>Imię i nazwisko</FormControlLabelText>
            </FormControlLabel>
            <Input style = {styles.box} >
            <FontAwesome5 name="user" size={22} color="black" />
              <InputField 
                type="text"
                placeholder="Imie i nazwisko"
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
              <FormControlLabelText style = {styles.label}>Email</FormControlLabelText>
            </FormControlLabel>
            <Input style = {styles.box} >
            <Fontisto name="email" size={24} color="black" />
              <InputField
                type="text"
                placeholder="example@gmail.com"
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
              <FormControlLabelText style = {styles.label}>Hasło</FormControlLabelText>
            </FormControlLabel>
            <Input style = {styles.box} >
            <MaterialIcons name="lock-outline" size={24} color="black" />
              <InputField
                type="password"
                placeholder="Hasło"
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
              <FormControlLabelText style = {styles.label}>Potwierdź hasło</FormControlLabelText>
            </FormControlLabel>
            <Input style = {styles.box} >
            <MaterialIcons name="lock-outline" size={24} color="black" />
              <InputField 
                type="password"
                placeholder="Powtórz hasło"
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

        <Button
            onPress={()=> navigation.navigate("AddCard")}
            style={styles.registerNextButton}
            size="lg"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}>
        <ButtonText style={ {color:'#000'} }>Dalej</ButtonText>
        </Button>
      
        </View>
    )
}


