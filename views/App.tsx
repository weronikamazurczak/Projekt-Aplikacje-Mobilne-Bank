import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import OnboardScreens from "./OnboardScreens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "./SplashScreen";
import Login from "./Login";
import Register from "./Register";
import { AddCard } from "./AddCard";
import HomeScreen from "./HomeScreen";
import Products from "./Products";
import Profil from "./Profil";
import FaceVerification from "./FaceVerification";
import FingerVerification from "./FingerVerification";
import SuccessfulVerification from "./SuccessfulVerification";
import Notification from "./Notification";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Transfer from "./Transfer";
import TransferCompleted from "./TransferCompleted";
import Send from "./Send";
import Send2 from "./Send2";
import Historia from "./Historia";
import Send3 from "./Send3";
import Send4 from "./Send4";
import SuccessfullFaceVeryfication from "./SuccessfullFaceVeryfication";
import FaceVeryficationAdd from "./FaceVeryficationAdd";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

interface PrzekazanyKluczUzytkownika {
  kluczZalogowanegoUżytkownika?: string;
}

function TabNavigator() {
  const route = useRoute();
  const { kluczZalogowanegoUżytkownika } =
    route.params as PrzekazanyKluczUzytkownika;
  return (
    <Tab.Navigator
      initialRouteName="Pulpit"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#5ae4a8",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Pulpit"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home-outline" size={24} color={color} />
          ),
        }}
        initialParams={{
          kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika,
        }}
      />
      <Tab.Screen
        name="Historia"
        component={Historia}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={24} color={color} />
          ),
        }}
        initialParams={{
          screenName: "Pulpit",
          kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika,
        }}
      />
      <Tab.Screen
        name="Produkty"
        component={Products}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="wallet-outline"
              size={24}
              color={color}
            />
          ),
        }}
        initialParams={{
          kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika,
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
          unmountOnBlur: true,
        }}
        initialParams={{
          kluczZalogowanegoUżytkownika: kluczZalogowanegoUżytkownika,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="SplashScreen"
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="OnboardScreens" component={OnboardScreens} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="FaceVerification" component={FaceVerification} />
          <Stack.Screen name="Profil" component={Profil} />
          <Stack.Screen
            name="FingerVerification"
            component={FingerVerification}
          />
          <Stack.Screen
            name="SuccessfulVerification"
            component={SuccessfulVerification}
          />
          <Stack.Screen name="Notification" component={Notification} />

          <Stack.Screen name="Home" component={TabNavigator} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="Transfer" component={Transfer} />
          <Stack.Screen
            name="TransferCompleted"
            component={TransferCompleted}
          />
          <Stack.Screen name="Send" component={Send} />
          <Stack.Screen name="Send2" component={Send2} />
          <Stack.Screen name="Send3" component={Send3} />
          <Stack.Screen name="Send4" component={Send4} />

          <Stack.Screen name="SuccessfullFaceVeryfication" component={SuccessfullFaceVeryfication} />
          <Stack.Screen name="FaceVeryficationAdd" component={FaceVeryficationAdd} />
          <Stack.Screen
            name="Historia"
            component={Historia}
            initialParams={{ screenName: "Pulpit" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
