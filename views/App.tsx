import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import OnboardScreens from "./OnboardScreens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "./SplashScreen";
import { useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
import { AddCard } from "./AddCard";
import HomeScreen from "./HomeScreen";
import Products from "./Products";
import Profil from "./Profil";
import Historia from "./Historia";
import FaceVerification from "./FaceVerification";
import FingerVerification from "./FingerVerification";
import SuccessfulVerification from "./SuccessfulVerification";
import Notification from "./Notification";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { LastTransaction } from "./LastTransaction";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Pulpit"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5ae4a8',
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Pulpit"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home-outline" size={24} color = {color} />
          ),
        }}
      />
      <Tab.Screen
        name="Historia"
        component={Historia}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={24} color = {color} />
          ),
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
              color = {color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color = {color} />
          ),
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
          initialRouteName="LastTransaction"
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

          <Stack.Screen name="Home" component={TabNavigator}/>
          <Stack.Screen name= "LastTransaction" component={LastTransaction}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
