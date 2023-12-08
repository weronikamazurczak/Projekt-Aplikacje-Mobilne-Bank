import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Avatar,  AvatarImage, ButtonText, Center, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, HStack, Heading, Input, InputField, VStack, Button } from '@gluestack-ui/themed'
import styles from './styles'
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function Profil({ navigation }: any) {
  return (
    <View style={styles.profil}>
      <Pressable onPress={() => {navigation.navigate("Home")}} style={styles.arrow}>
        <AntDesign name="arrowleft" size={50} color="black" />
      </Pressable>

      <Text style={styles.titleProfil}>Profil</Text>

      <Avatar size = "lg" style={styles.profilAwatar}>
          <AvatarImage 
            source={{
              uri: "https://i.imgur.com/sdc68pF.png",
            }}
            alt = 'zdjecie'
            />
      </Avatar>

      <Text style={styles.nameProfil}>Weronika</Text>
      <Text style={styles.mailProfil}>weronika7483@gmail.com</Text>

      
      <View style={{ rowGap: 18 }}>
          <FormControl size="sm" isDisabled={false} isInvalid={false} isReadOnly={true} isRequired={false} >
            <FormControlLabel mb='$1'>
              <FormControlLabelText style={styles.label}>
                Imię i Nazwisko
                </FormControlLabelText>
            </FormControlLabel>
            <Input style={styles.box}>
              <FontAwesome5 name="user" size={22} color="black" />
              <InputField
                type="text"
                placeholder="Weronika Mazurczak"
              />
            </Input>
          </FormControl>

          <FormControl size="sm" isDisabled={false} isInvalid={false} isReadOnly={true} isRequired={false} >
            <FormControlLabel mb='$1'>
              <FormControlLabelText style={styles.label}>
                Email
                </FormControlLabelText>
            </FormControlLabel>
            <Input style={styles.box}>
              <Fontisto name="email" size={24} color="black" />
              <InputField
                type="text"
                placeholder="weronika7483@gmail.com"
              />
            </Input>
          </FormControl>

          <FormControl size="sm" isDisabled={false} isInvalid={false} isReadOnly={true} isRequired={false} >
            <FormControlLabel mb='$1'>
              <FormControlLabelText style={styles.label}>
                Karta
                </FormControlLabelText>
            </FormControlLabel>
            <Input style={styles.box}>
              <AntDesign name="creditcard" size={24} color="black" />
              <InputField
                type="text"
                placeholder="1234 1234 1234 1234"
              />
            </Input>
          </FormControl>
        </View>
      
      <Button
      onPress={() => {navigation.navigate("Login")}}
      style={styles.registerNextButton}
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText style={{ color: "#000" }}>Wyloguj</ButtonText>
      </Button>
    </View>
  )
}