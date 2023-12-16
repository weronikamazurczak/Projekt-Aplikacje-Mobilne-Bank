import { View, Text, ScrollView, Pressable, Avatar, AvatarImage, } from "@gluestack-ui/themed"
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
interface NotificationI {
  transactionType: string
  amount?: number | null
  description: string
  timeNotification: string
}

export default function Notification({ navigation }: any) {
  const NotifactionElement = (arrayNotification: NotificationI[]) => {
    return arrayNotification.map((item, index) => (
      <View key={index} style={{
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8, height: 120, marginHorizontal: 15,
        borderBottomColor: "gray", borderBottomWidth: 1
      }}>
        <View style={{

        }}>
          <View style={{
            flexDirection: 'row', justifyContent: "flex-start", alignItems: "center", columnGap: 15, height: 60
          }}>
            <Avatar size="md" >
              <AvatarImage
                source={require("../assets/awatar2.png")}
                alt="odbiorca"
              />
            </Avatar>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#000", paddingVertical: 15 }}>{item.transactionType}</Text>
          </View>
          <Text style={{ color: 'gray', fontSize: 14 }}>{item.description}</Text>
        </View>
        <View style={{

        }}>
          <View style={{
            height: 60, alignItems: "center",
          }}>
            <Text style={{ fontSize: 18, color: "#000", fontWeight: 'bold', textAlign: "center", paddingVertical: 15 }}>{item.amount == null ? "" : "+" + item.amount + " PLN"}</Text>
          </View>
          <Text style={{ color: 'gray', fontSize: 14, }}>{item.timeNotification}</Text>
        </View>
      </View>
    ));
  };
  const transaction =
    [
      {
        dateTime: "Dzisiaj",
        transactionList: [{ transactionType: "netflix", amount: null, description: "Trasakcja kartą płatniczą", timeNotification: "20 minut temu" },
        { transactionType: "spotify", amount: 30, description: "Trasakcja kartą płatniczą", timeNotification: "30 minut temu" }]
      },
      {
        dateTime: "Wczoraj",
        transactionList: [{ transactionType: "youtube", amount: 120, description: "Trasakcja kartą płatniczą", timeNotification: "22 godziny temu" },
        { transactionType: "spotify", amount: 120, description: "Trasakcja kartą płatniczą", timeNotification: "1 dzień temu" },
        { transactionType: "spotify", amount: 120, description: "Trasakcja kartą płatniczą", timeNotification: "1 dzień temu" },]
      },
      {
        dateTime: "Dwa dni temu",
        transactionList: [{ transactionType: "youtube", amount: 120, description: "Trasakcja kartą płatniczą", timeNotification: "2 dni temu" },
        { transactionType: "spotify", amount: null, description: "Trasakcja kartą płatniczą", timeNotification: "2 dni temu" },
        { transactionType: "spotify", amount: 120, description: "Trasakcja kartą płatniczą", timeNotification: "2 dni temu" },
        { transactionType: "spotify", amount: 150, description: "Trasakcja kartą płatniczą", timeNotification: "2 dni temu" }]
      }
    ]
  return (
    <ScrollView>
      <Pressable onPress={() => { navigation.navigate("Home") }} style={styles.arrowProduct}>
        <AntDesign name="arrowleft" size={40} color="black" />
      </Pressable>

      <Text style={{
        paddingTop: 10,
        fontWeight: "bold",
        fontSize: 24,
        marginLeft: 40,
        marginBottom: 10,
        color: "#000",
      }}>Powiadomienia</Text>

      {transaction.map((item, index) => {
        return <View key={index}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20, backgroundColor: "#cccccc", padding: 5, textAlign: "center" }}>
            {item.dateTime}
          </Text>
          {NotifactionElement(item.transactionList)}
        </View>

      })}
    </ScrollView>
  )
}