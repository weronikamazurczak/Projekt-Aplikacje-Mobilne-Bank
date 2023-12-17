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
  ScrollView,
} from "@gluestack-ui/themed";
import React from "react";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import CreditCardUI from "rn-credit-card-ui/src/components/CreditCardUI";
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LastTransaction } from "./LastTransaction";


export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.main}>
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
            holderGender=""
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
      <View style={{
            flexDirection: 'row',
            justifyContent:"space-around"
          }}>
            <View>
          <Pressable onPress={() => {navigation.navigate("Send")}} style={styles.iconProductHome}>
          <MaterialCommunityIcons name="bank-transfer-out" size={40} color="black" style={{
            backgroundColor:"#90EE90", padding:5
          }}/>
        <Text padding={5} paddingVertical={20} fontSize={20} color="black">Wyślij</Text>
      </Pressable>
      </View>
      <View>
      <Pressable onPress={() => {navigation.navigate("Historia")}} style={styles.iconProductHome}>
      <MaterialCommunityIcons name="bank-transfer-in" size={40} color="black" style={{
            backgroundColor:"#90EE90", padding:5
          }}/>
        <Text padding={5} paddingVertical={20} fontSize={20} color="black">Historia</Text>
      </Pressable>
      </View>
      <View>
      <Pressable onPress={() => {navigation.navigate("Transfer")}} style={styles.iconProductHome}>
      <Octicons name="arrow-switch" size={40} color="black" style={{
            backgroundColor:"#90EE90", padding:5
          }}/>
        <Text padding={5} fontSize={20} color="black">Przelew Krajowy</Text>
      </Pressable>
      </View>
          </View>
          
      <Text style={{
            paddingTop:10,
            fontWeight: "bold",
            fontSize: 22,
            marginLeft: 10,
            color: "#000",
      }}>Ostatnie Transakcje</Text>
        <LastTransaction navigation={navigation}/>
    </ScrollView>
  );
}
