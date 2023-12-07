import {
  View,
  Text,
  Pressable,
  VStack,
  HStack,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Heading,
} from "@gluestack-ui/themed";
import React from "react";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";


export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.main}>
      <VStack space="2xl" style={styles.awatar}>
      <Pressable 
      onPress={() => navigation.navigate("Notification") }
      >
          <FontAwesome5
            name="bell"
            size={50}
            color="#254C48"
            style={styles.bell}
          />
        </Pressable>
        <HStack space="md">
          <Avatar>
            <AvatarFallbackText>A</AvatarFallbackText>
            <AvatarImage
            source={{
              uri: "https://i.imgur.com/sdc68pF.png",
            }}
            alt = 'zdjecie'
            />
          </Avatar>
          <VStack>
            <Heading size="sm">Dzień dobry</Heading>
            <Text size="sm">NAME</Text>
          </VStack>
        </HStack>
      </VStack>

      <View style={styles.card}>
        <Text>
          KARTA KREDYTOWA
        </Text>
      </View>


    </View>
  );
}
