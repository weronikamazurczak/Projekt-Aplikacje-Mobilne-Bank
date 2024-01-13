import { Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Divider,
  ScrollView,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Avatar,
  AvatarImage,
  HStack,
  VStack,
} from "@gluestack-ui/themed";
import { useRoute } from "@react-navigation/native";

interface PrzekazanaNazwa {
  screenName?: string;
  kluczZalogowanegoUżytkownika: string;
}

export default function Send({ navigation }: any) {
  const route = useRoute();
  const { kluczZalogowanegoUżytkownika } =
    route.params as PrzekazanaNazwa;
    console.log(kluczZalogowanegoUżytkownika ,"nbckasjdcfnbs");
  const { screenName } = route.params as PrzekazanaNazwa;
  //   //Otrzymane parametry z ekranu HomeScreen
  //   navigation.navigate("Send", route.params = { screenName: "Pulpit" });
  //   route:{
  //     params:{
  //       screenName: "Pulpit"
  //     }
  //   }
  //   // Otrzymane parametry z ekranu Send2
  //   navigation.navigate("Send", route.params = { screenName: "nazwascreena"});
  //   route:{
  //     params:{
  //       undefined
  //     }
  //   }
  console.log(screenName);
  return (
    <ScrollView style={styles.send}>
      <Pressable
        onPress={() => {
          navigation.navigate(screenName);
        }}
        style={styles.arrow}
      >
        <AntDesign name="arrowleft" size={50} color="black" />
      </Pressable>

      <Text style={styles.titleSend}>Wyślij</Text>
      <Text style={styles.selectPerson}>Wybierz odbiorcę zdefiniowanego </Text>

      <View>
        <FormControl
          size="sm"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={true}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText
              style={styles.labelSend}
            ></FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.boxSend}>
            <InputField
              fontSize={14}
              type="text"
              placeholder="Wyszukaj odbiorce po imieniu lub email"
            />
          </Input>
        </FormControl>
      </View>

      <Text style={styles.lastSend}>Ostatnie transakcje </Text>

      <View style={{ rowGap: 18 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Send2", { screenName: "Pulpit" ,
            kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika});
          }}
        >
          <HStack space="lg">
            <Avatar size="lg" style={styles.avatarSend}>
              <AvatarImage
                source={require("../assets/awatar2.png")}
                alt="odbiorca"
              />
            </Avatar>
            <VStack>
              <Text style={styles.namePerson}>Michał</Text>
            </VStack>
          </HStack>
        </Pressable>

        <Divider my="$0.5" />

        <Pressable
          onPress={() => {
            navigation.navigate("Send2");
          }}
        >
          <HStack space="lg">
            <Avatar size="lg" style={styles.avatarSend}>
              <AvatarImage
                source={require("../assets/awatar4.png")}
                alt="odbiorca"
              />
            </Avatar>
            <VStack>
              <Text style={styles.namePerson}>Bartłomiej</Text>
            </VStack>
          </HStack>
        </Pressable>

        <Divider my="$0.5" />

        <Pressable
          onPress={() => {
            navigation.navigate("Send2");
          }}
        >
          <HStack space="lg">
            <Avatar size="lg" style={styles.avatarSend}>
              <AvatarImage
                source={require("../assets/awatar3.png")}
                alt="odbiorca"
              />
            </Avatar>
            <VStack>
              <Text style={styles.namePerson}>Katarzyna</Text>
            </VStack>
          </HStack>
        </Pressable>
      </View>
    </ScrollView>
  );
}
