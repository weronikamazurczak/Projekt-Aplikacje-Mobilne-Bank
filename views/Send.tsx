import {  Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { AntDesign } from "@expo/vector-icons";
import { View, Image, Button, Divider, ScrollView, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, Avatar, AvatarImage, HStack, Heading, VStack} from "@gluestack-ui/themed";

export default function Send({ navigation }: any) {
    return (
        
      <ScrollView style={styles.send}>

        <Pressable onPress={() => {navigation.navigate("Products")}} style={styles.arrow}>
          <AntDesign name="arrowleft" size={50} color="black" />
        </Pressable>
  
        <Text style={styles.titleSend}>Wyślij</Text>
        <Text style={styles.selectPerson}>Wybierz odbiorcę zdefiniowanego </Text>

        <View >
        <FormControl size="sm" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true} >
            <FormControlLabel mb='$1'>
              <FormControlLabelText style={styles.labelSend}>
                
                </FormControlLabelText>
            </FormControlLabel>
            <Input style={styles.boxSend}>
              <InputField fontSize={14} 
                type="text"
                placeholder='Wyszukaj odbiorce po imieniu lub email'
              />
            </Input>
          </FormControl>
        </View>

        <Text style={styles.lastSend}>Ostatnie transakcje </Text>

        <View style={{ rowGap: 18 }}>
        <HStack space="lg">
        <Avatar size = "lg" style={styles.avatarSend}>
          <AvatarImage 
            source={require("../assets/awatar2.png")}
            alt="odbiorca"
            />
        </Avatar>
          <VStack>
            <Text style={styles.namePerson}>Michał</Text>
          </VStack>
        </HStack>
        <Divider my="$0.5" />

        <HStack space="lg">
        <Avatar size = "lg" style={styles.avatarSend}>
          <AvatarImage 
            source={require("../assets/awatar4.png")}
            alt="odbiorca"
            />
        </Avatar>
          <VStack>
            <Text style={styles.namePerson}>Bartłomiej</Text>
          </VStack>
        </HStack>
        <Divider my="$0.5" />

        <HStack space="lg">
        <Avatar size = "lg" style={styles.avatarSend}>
          <AvatarImage 
            source={require("../assets/awatar3.png")}
            alt="odbiorca"
            />
        </Avatar>
          <VStack>
            <Text style={styles.namePerson}>Katarzyna</Text>
          </VStack>
        </HStack>


        </View>

        
         
    </ScrollView>
        
    )
}