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
import CreditCardUI from "rn-credit-card-ui/src/components/CreditCardUI";


export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.main}>
      <VStack space="2xl" style={styles.awatar}>
      <Pressable 
      onPress={() => navigation.navigate("Notification")  }style={styles.bell}
      >
          <FontAwesome5
            name="bell"
            size={50}
            color="#254C48" 
          />
        </Pressable>
        <HStack space="md">
          <Avatar >
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
      <CreditCardUI 
            cardNumber="4242424242424242"
            cvc="123"
            holderGender="miss"
            holderName="Maria James"
            expiryDate="11/23"
            bankName={"Bank of Sky"}
            bankLogo={{
                uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Earth_Eastern_Hemisphere.jpg/1024px-Earth_Eastern_Hemisphere.jpg"
            }}
            bankLogoStyle={{
                borderRadius:100
            }}
            isCardNumberShown={false}
            isHorizontalFlipEnabled={true}
            isVerticalFlipEnabled={false}
            dateLabel="VALID"
        />
      </View>


    </View>
  );
}
